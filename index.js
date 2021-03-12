import init, { write } from '/pkg/WasmReader.js'

let content =""

async function run() {
    await init()
    document.addEventListener('keypress', (e)=>{
        content = write(content, e.key)
        document.body.textContent = content
        console.log(e.key)
    });
}
run();