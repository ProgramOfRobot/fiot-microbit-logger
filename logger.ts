/**
 * Including logging method.
 * @author yuN1.
 */
namespace Logger {
    /**
     * The enum of logging levels.
     */
    export enum LoggingLevel{
        NoLevel = 0,
        Info = 1,
        Warning = 2,
        Error = 3,
    };

    /**
     * The method to log to the serial.
     */
    export function write(line: string, level: LoggingLevel = LoggingLevel.Info): void {
        let loggingLevel: string;
        switch (level) {
            case LoggingLevel.NoLevel: {
                break;
            }

            case LoggingLevel.Info: {
                loggingLevel = "[Info] ";
                break;
            }

            case LoggingLevel.Warning: {
                loggingLevel = "[Warning] ";
                break;
            }

            case LoggingLevel.Error: {
                loggingLevel = "[Error] ";
                break;
            }

            default: {
                loggingLevel = "";
            }
        };

        serial.writeLine(loggingLevel + line);

        return;
    }

    /**
     * The method to read the serial of one line.  
     */
    export function read(): string {
        return serial.readLine();
    }

    /**
     * The method to change the baud rate of the serial.
     */
    export function baudRate(baudrate: number): void {
        serial.setBaudRate(baudrate);
        return;
    }

    /**
     * The method to change the communicating way to use the USB.
     */
    export function useUsb(): void {
        serial.redirectToUSB();
    }
}