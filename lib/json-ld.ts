/**
 * Serialise a JSON-LD payload for embedding in a <script> tag.
 *
 * `JSON.stringify` does not escape `<`, so a value containing `</script>` would
 * close the tag early and let whatever follows be parsed as HTML. Escaping the
 * HTML-significant characters to their \u form keeps the JSON byte-identical to
 * a parser while making it impossible to break out of the element.
 *
 * Always use this instead of passing `JSON.stringify(...)` straight to
 * `dangerouslySetInnerHTML`.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}
