import { RunService } from "@rbxts/services";

export default class Logger {
    private static Log(source: string, msg: unknown, fatal = false): void {
        if (fatal)
            throw error(`[${source}]:   ➤ ${msg}`);
        else
            print(`[${source}]:   ➤ ${msg}`);
    }

    public static ComponentActive(name: string): void {
        this.Log("Info", `${name} active`);
    }
    
    public static Debug(...info: defined[]): void {
        if (RunService.IsStudio())
            this.Log("Debug", info.join("   "));
    }

    public static UnhandledCase(msg: unknown): void {
        this.Log(`Unhandled Case`, msg, true);
    }

    public static UtilError(methodName: string, msg: unknown): void {
        this.Log(`Util Error : ${methodName}()`, msg, true);
    }

    public static KnitError(msg: unknown): void {
        this.Log("Knit Error", msg, true);
    }
}