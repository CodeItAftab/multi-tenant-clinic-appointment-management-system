"use client";

import { useState } from "react";
import { Star, X, MessageSquareText, Loader2, CheckCircle2 } from "lucide-react";

export interface ReviewFormProps {
    /** Doctor (or item) this review is for. Shown in the form header. */
    doctorName?: string;
    /** Called after a successful submit, e.g. to close the modal. */
    onClose: () => void;
    /** Called with the submitted review payload — wire this to your API. */
    onSubmit?: (review: {
        name: string;
        rating: number;
        comment: string;
    }) => Promise<void> | void;
}

function ReviewForm({ doctorName, onClose, onSubmit }: ReviewFormProps) {
    const [rating, setRating] = useState<number>(0);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const ratingLabels: Record<number, string> = {
        1: "Poor",
        2: "Fair",
        3: "Good",
        4: "Very Good",
        5: "Excellent",
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (rating === 0) {
            setError("Please select a star rating.");
            return;
        }
        if (!name.trim()) {
            setError("Please enter your name.");
            return;
        }
        if (!comment.trim()) {
            setError("Please share a few words about your experience.");
            return;
        }

        try {
            setSubmitting(true);
            await onSubmit?.({ name: name.trim(), rating, comment: comment.trim() });
            setSubmitted(true);
        } catch {
            setError("Something went wrong while submitting. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="rounded-2xl bg-white p-8 shadow-2xl text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e0f7fa]">
                    <CheckCircle2 className="h-7 w-7 text-[#0f8fa8]" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                    Thank you for your review!
                </h3>
                <p className="mt-1.5 text-sm text-slate-600">
                    Your feedback helps other patients make better choices.
                </p>
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 w-full rounded-xl bg-[#4bb1c8] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#33b6d3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                >
                    Close
                </button>
            </div>
        );
    }

    return (
        <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0f7fa]">
                        <MessageSquareText className="h-5 w-5 text-[#0f8fa8]" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">
                            Write a Review
                        </h3>
                        {doctorName && (
                            <p className="text-sm text-slate-500">
                                Share your experience with{" "}
                                <span className="font-semibold text-[#0f8fa8]">
                                    {doctorName}
                                </span>
                            </p>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close review form"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8]"
                >
                    <X className="h-4 w-4" strokeWidth={2.5} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                {/* Star rating */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Your Rating
                    </label>
                    <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                className="rounded-full p-0.5 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8]"
                            >
                                <Star
                                    size={28}
                                    className={
                                        (hoverRating || rating) >= star
                                            ? "fill-[#4bb1c8] text-[#4bb1c8]"
                                            : "fill-transparent text-slate-300"
                                    }
                                />
                            </button>
                        ))}
                        <span className="ml-2 text-sm font-semibold text-slate-500 min-w-20">
                            {ratingLabels[hoverRating || rating] ?? ""}
                        </span>
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label
                        htmlFor="review-name"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                        Your Name
                    </label>
                    <input
                        id="review-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priya Sharma"
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#4bb1c8] focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]/30"
                    />
                </div>

                {/* Comment */}
                <div>
                    <label
                        htmlFor="review-comment"
                        className="mb-1.5 block text-sm font-semibold text-slate-700"
                    >
                        Your Review
                    </label>
                    <textarea
                        id="review-comment"
                        rows={4}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Tell us about your visit — how was the care, wait time, and overall experience?"
                        className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:border-[#4bb1c8] focus:outline-none focus:ring-2 focus:ring-[#4bb1c8]/30"
                    />
                </div>

                {error && (
                    <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                        {error}
                    </p>
                )}

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={submitting}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#4bb1c8] py-2.5 text-sm font-bold text-white shadow-md shadow-[#e0f7fa] transition-all hover:bg-[#33b6d3] hover:shadow-lg hover:shadow-[#b2ebf2] disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4bb1c8] focus-visible:ring-offset-2"
                    >
                        {submitting ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Review"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ReviewForm;