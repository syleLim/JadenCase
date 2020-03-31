function is_lower(c)
{
    const code = c.charAt(0);
    
    if ('a' <= code && code <= 'z')
        return (1);
    return (0);
}

function is_upper(c)
{
    const code = c.charAt(0);
    
    if ('A' <= code && code <= 'Z')
        return (1);
    return (0);
}

function solution(s) {
    var answer = [];
    
    s.toLowerCase().split('').forEach((e, i) => {
        if (is_lower(e) && (i === 0 || s[i - 1] === " "))
            answer += e.toUpperCase();
        else
            answer += e
    })
    
    return (answer);
}