"use client";

import { useEffect } from "react";
import ReviewForm from "@/components/Forms/ReviewForm";

export interface ReviewModalProps {
    open: boolean;
    doctorName?: string;
    onClose: () => void;
    onSubmit?: (review: { name: string; rating: number; comment: string }) => Promise<void> | void;
}

/**
 * Responsive popup wrapper for ReviewForm with Lenis isolation,
 * body scroll lock, and ESC-key dismissal.
 */
function ReviewModal({ open, doctorName, onClose, onSubmit }: ReviewModalProps) {
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-3 min-[420px]:p-4 sm:p-6 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out] overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Review Form"
        >
            <div
                className="relative w-full max-w-md max-h-[92dvh] sm:max-h-[88vh] overflow-y-auto rounded-2xl sm:rounded-3xl shadow-2xl animate-[popIn_0.25s_ease-out] overscroll-contain"
                data-lenis-prevent
                style={{ WebkitOverflowScrolling: "touch" }}
                onClick={(e) => e.stopPropagation()}
            >
                <ReviewForm
                    doctorName={doctorName}
                    onClose={onClose}
                    onSubmit={onSubmit}
                />
            </div>

            <style jsx global>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes popIn {
                    from {
                        opacity: 0;
                        transform: scale(0.96) translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default ReviewModal;