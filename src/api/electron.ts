export async function open_project(){
    var options = {
        properties: ["openDirectory"],
    }
    var path = window.electron.open_dialog(options);
    console.log(path);
}