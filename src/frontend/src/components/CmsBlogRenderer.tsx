/**
 * CmsBlogRenderer
 * Renders HTML content from a CMS markdown post.
 * Uses the same styling class as existing blog articles.
 */
import { motion } from "motion/react";

interface CmsBlogRendererProps {
  htmlContent: string;
}

export default function CmsBlogRenderer({ htmlContent }: CmsBlogRendererProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="blog-article cms-rendered"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: CMS content is markdown-generated HTML, no user input
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
