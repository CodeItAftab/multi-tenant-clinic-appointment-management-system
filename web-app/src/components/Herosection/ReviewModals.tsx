"use client";

import ReviewForm from "@/components/Forms/ReviewForm";

export interface ReviewModalProps {
    open: boolean;
    doctorName?: string;
    onClose: () => void;
    onSubmit?: (review: { name: string; rating: number; comment: string }) => Promise<void> | void;
}

/**
 * Popup wrapper for ReviewForm — same overlay pattern used for the
 * Booking modal in FeaturedDoctors (backdrop blur + click-outside-to-close).
 */
function ReviewModal({ open, doctorName, onClose, onSubmit }: ReviewModalProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="flex min-h-full items-center justify-center px-4 py-8 sm:py-12">
                <div className="w-full max-w-md">
                    <ReviewForm
                        doctorName={doctorName}
                        onClose={onClose}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    );
}

export default ReviewModal;