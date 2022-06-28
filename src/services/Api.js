
export const Post = async (url, data) => {
    const requestOption = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
    const res = await fetch(url, requestOption).then(r => r.json()).catch((err) => {console.log("error", err); return {status:'error', error_code: 500, message:err}});
    // const result = res.finally((res) => res);
    // console.log(res.catch((err) => err), "error")
    console.log("res ----", res);
    // console.log("result", result);
    return res;
}