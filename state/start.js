export default {
    preload,
    create,
    update
}
function preload() {
    this.load.image("title", "./assets/title.png")
}
function create() {
    this.add.image(400, 300, "title")
    this.keys = this.input.keyboard.addKeys({
        ENTER: Phaser.Input.Keyboard.KeyCodes.ENTER,

    })
}
function update() {
if(this.keys.ENTER.isDown) {
    this.scene.start("play")
}
}
