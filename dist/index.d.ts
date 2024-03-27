/**
 * Checks if a given file type is allowed based on a list of allowed types.
 *
 * @param fileType - The file type to check.
 * @param allowedTypes - An array of allowed file types. If undefined, all file types are allowed.
 * @returns True if the file type is allowed, false otherwise.
 */
export default function isFileTypeAllowed(fileType: string, allowedTypes: string[] | undefined): boolean;
