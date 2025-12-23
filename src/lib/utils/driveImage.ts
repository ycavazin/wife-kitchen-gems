/**
 * Converts a Google Drive sharing URL to a direct image URL
 * From: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * To: https://drive.usercontent.google.com/download?id=FILE_ID&export=view
 */
export function getGoogleDriveImageUrl(driveUrl: string | undefined): string | null {
  if (!driveUrl) return null;
  
  // Extract file ID from Google Drive URL
  const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.usercontent.google.com/download?id=${match[1]}&export=view`;
  }
  
  return null;
}
