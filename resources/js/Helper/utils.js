export const getFirstCharacter = (name) => {
    if (!name) return ''
    return name.charAt(0).toUpperCase()
}
