/**
 * Gallery filenames encode their subject: `wedding-NN-{subject}-nn.jpg`, plus a
 * standalone `bridal-hairstyle-detail-*` set. That subject is the only
 * description we have per photo, so alt text is derived from it rather than
 * repeating one generic string across all 121 images.
 */

const SUBJECT_ALT: Record<string, string> = {
  "bride-and-groom": "Bride and groom on their wedding day",
  "bridesmaids": "Bridesmaids with wedding hair and makeup",
  "bride-getting-ready": "Bride getting ready with on-location hair and makeup",
  "bridal-portrait": "Bridal portrait featuring wedding hair and makeup",
  "wedding-party": "Wedding party with coordinated hair and makeup",
  "bridal-hairstyle-detail": "Close-up of a finished bridal hairstyle",
  "bridal-updo": "Bridal updo styled for a wedding day",
  "bridal-hair-styling": "Bridal hair being styled on location",
  "outdoor-bridal-portrait": "Outdoor bridal portrait with wedding hair and makeup",
  "first-dance": "Newlyweds during their first dance",
  "bridal-party": "Bridal party with wedding hair and makeup",
  "wedding-details": "Wedding day details",
  "getting-ready": "Getting ready before the ceremony",
  "wedding-ceremony": "Wedding ceremony",
  "reception": "Wedding reception",
  "flower-girl": "Flower girl at the wedding",
  "family-portrait": "Family portrait on the wedding day",
  "cake-cutting": "Cake cutting at the wedding reception",
  "bridal-veil": "Bridal veil detail",
  "bridal-makeup": "Bridal makeup applied on location",
  "bridal-bouquet": "Bridal bouquet",
};

const FALLBACK = "Bridal hair and makeup by Beauty on Demand in Rockwall, TX";

/** Turn a gallery filename into descriptive alt text. */
export function galleryAlt(filename: string): string {
  const subject = filename
    .replace(/\.(jpe?g)$/i, "")
    .replace(/^wedding-\d+-/, "")
    .replace(/-\d+$/, "");

  return SUBJECT_ALT[subject] ?? FALLBACK;
}
