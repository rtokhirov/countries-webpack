import loaderToggle from "./loader";

const request = async(resource) => {
    // console.log("Loading...")
    loaderToggle(true);
    const req = await fetch(resource);

    if (!req.ok) {
        loaderToggle(false)

        throw new Error("Something went wrong !");
    }

    const data = await req.json()
        // console.log("Done!");
    loaderToggle(false)
    return data
}

export default request