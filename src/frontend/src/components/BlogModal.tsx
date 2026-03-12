import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import type { BlogPost } from "../data/blogPosts";

type BlogModalProps = {
  post: BlogPost | null;
  onClose: () => void;
};

export default function BlogModal({ post, onClose }: BlogModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!post) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    // Prevent background scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [post, onClose]);

  return (
    <AnimatePresence>
      {post && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <dialog
              aria-labelledby="blog-modal-title"
              open
              className="relative w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col p-0 m-0"
              style={{ background: "#FFFDF5", border: "2px solid #C9A84C" }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              {/* Cover image */}
              {post.coverImage && (
                <div className="h-40 md:h-52 relative overflow-hidden flex-shrink-0">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(44,24,16,0.6) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Header bar */}
              <div
                className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 flex-shrink-0"
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.25)",
                  background:
                    "linear-gradient(160deg, #FFF8E7 0%, #F5F0E8 100%)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gold-deep bg-gold/10 border border-gold/25 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-brown-light">
                      {post.readTime}
                    </span>
                  </div>
                  <h2
                    id="blog-modal-title"
                    className="font-serif text-xl md:text-2xl font-bold text-brown-text leading-snug"
                  >
                    {post.title}
                  </h2>
                </div>

                {/* Close button */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close article"
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-brown-medium hover:text-brown-text hover:bg-gold/15 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <FaTimes size={16} />
                </button>
              </div>

              {/* Scrollable content */}
              <div
                className="overflow-y-auto flex-1 px-6 py-6"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <article className="prose-vastu">{post.content}</article>
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between px-6 py-4 flex-shrink-0"
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.25)",
                  background: "rgba(201,168,76,0.04)",
                }}
              >
                <p className="font-accent italic text-brown-medium text-sm">
                  — {post.author}, SimplyVastuShastra
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-gold px-5 py-2 rounded-full text-xs font-semibold"
                >
                  Close Article
                </button>
              </div>
            </dialog>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
