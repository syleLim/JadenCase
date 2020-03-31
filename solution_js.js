function is_lower(c)
{
    const code = c.charAt(0);
    
    if ('a' <= code && code <= 'z')
        return (1);
    return (0);
}

function solution(s) {
    var answer = [];
    
    console.log(s.split(''));

    s.split().forEach((e, i) => {
        console.log(s[i - 1]);
        if (is_lower(e) && (s[i - 1] === " " || i === 0))
            answer += e.toUpperCase();
        else
            answer += e;
    })
    
    return (answer);
}

console.log(solution("for unfall me"));