export const handleLongText = (text, long) => {
    if (text.length > long) {
        return text.substring(0, long) + "..."
    } else {
        return text
    }
}
