import Link from "next/link";

interface Props {
  /**
   * The href requires URL or string
   */
  href: string;
  /**
   * Title given to your card.
   */
  header: string;
  /**
   * Additional information for your card.
   */
  description: string;
  /**
   * The target attribute specifies where to display the linked URL.
   ** _self: the current browsing context. (Default)
   ** _blank: usually a new tab, but users can configure browsers to open a new window instead.
   ** _parent: the parent browsing context of the current one. If no parent, behaves as _self.
   ** _top: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as _self.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes
   */
  target?: "_self" | "_blank" | "_parents" | "_top";
}

export default function Card({
  href,
  header,
  description,
  target = "_self",
}: Props) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target={target}
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {header}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{description}</p>
    </Link>
  );
}
