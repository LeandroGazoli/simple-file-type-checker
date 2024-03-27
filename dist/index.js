"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if a given file type is allowed based on a list of allowed types.
 *
 * @param fileType - The file type to check.
 * @param allowedTypes - An array of allowed file types. If undefined, all file types are allowed.
 * @returns True if the file type is allowed, false otherwise.
 */
function isFileTypeAllowed(fileType, allowedTypes) {
    if (!allowedTypes)
        return true;
    const allowedRegex = allowedTypes.map((type) => new RegExp('^' + type.replace('*', '.*') + '$'));
    const isAllowed = allowedRegex.some((regex) => regex.test(fileType));
    return isAllowed;
}
exports.default = isFileTypeAllowed;
//# sourceMappingURL=index.js.map