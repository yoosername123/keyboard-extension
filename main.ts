//Keep it straight
//%icon = "\uf0a4"
namespace keyboard {
    //% blockId=keyboarddisplaykeyboard
    //% block="Show Keyboard"
    //% color="#51e879"
    export function displayKeyboard() : string {
        let keyboardCursor: game.LedSprite = null
        let keyboardReturnValue = ""
        let Row1: string[] = []
        let Row2: string[] = []
        let Row3: string[] = []
        let Row4: string[] = []
        let Row5: string[] = []
        keyboardCursor = game.createSprite(0, 0)
        keyboardReturnValue = ""
        Row1 = [
            "A",
            "B",
            "C",
            "D",
            "E"
        ]
        Row2 = [
            "F",
            "G",
            "H",
            "I",
            "K"
        ]
        Row3 = [
            "L",
            "M",
            "N",
            "O",
            "P"
        ]
        Row4 = [
            "Q",
            "R",
            "S",
            "T",
            "U"
        ]
        Row5 = [
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ]
        while (true) {
            if (input.isGesture(Gesture.LogoDown)) {
                keyboardCursor.change(LedSpriteProperty.Y, -1)
                basic.pause(200)
            } else if (input.isGesture(Gesture.LogoUp)) {
                keyboardCursor.change(LedSpriteProperty.Y, 1)
                basic.pause(200)
            } else if (input.isGesture(Gesture.TiltLeft)) {
                keyboardCursor.change(LedSpriteProperty.X, -1)
                basic.pause(200)
            } else if (input.isGesture(Gesture.TiltRight)) {
                keyboardCursor.change(LedSpriteProperty.X, 1)
                basic.pause(200)
            }
            if (input.buttonIsPressed(Button.AB)) {
                break;
            }
            if (input.buttonIsPressed(Button.A)) {
                if (keyboardCursor.get(LedSpriteProperty.X) == 0) {
                    keyboardReturnValue = "" + keyboardReturnValue + Row1[keyboardCursor.get(LedSpriteProperty.Y)]
                } else if (keyboardCursor.get(LedSpriteProperty.X) == 1) {
                    keyboardReturnValue = "" + keyboardReturnValue + Row2[keyboardCursor.get(LedSpriteProperty.Y)]
                } else if (keyboardCursor.get(LedSpriteProperty.X) == 2) {
                    keyboardReturnValue = "" + keyboardReturnValue + Row3[keyboardCursor.get(LedSpriteProperty.Y)]
                } else if (keyboardCursor.get(LedSpriteProperty.X) == 3) {
                    keyboardReturnValue = "" + keyboardReturnValue + Row4[keyboardCursor.get(LedSpriteProperty.Y)]
                } else if (keyboardCursor.get(LedSpriteProperty.X) == 4) {
                    keyboardReturnValue = "" + keyboardReturnValue + Row5[keyboardCursor.get(LedSpriteProperty.Y)]
                }
                basic.pause(100)
            }
        }
        keyboardCursor.delete()
        return keyboardReturnValue
    }

}
