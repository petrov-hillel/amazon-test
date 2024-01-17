export const createColumns = (data) => {
    const result = []
    const firstObject = data[0]
    const rowNames = Object.keys(firstObject)
    for (let i = 0; i < rowNames.length; i++) {
        if (rowNames[i] === 'profiles' || rowNames[i] === 'campaigns') continue
        const normalizeRowTitle = solution(rowNames[i])
        result.push({header: normalizeRowTitle, accessorKey: rowNames[i]})
    }
    return result
}

function solution(string) {
    const b = string.split('');
    for (let i = 0; i < b.length; i++) {
        if (b[i] === b[i].toUpperCase()) {
            b.splice(i, 1, ' ' + b[i]);
        }
    }
    const res = b.join('');
    return res.charAt(0).toUpperCase() + res.slice(1)
}