class RegionDetectionFailed extends Error {
    constructor() {
        super();

        this.name = this.constructor.name;
        this.message =
            "Region detection failed. Ensure VALORANT is up and runnning. Otherwise, please provide a region manually.";

        Error.stackTraceLimit = 2;
        Error.captureStackTrace(this, this.constructor);

        Object.setPrototypeOf(this, RegionDetectionFailed.prototype);
    }
}

export { RegionDetectionFailed };
