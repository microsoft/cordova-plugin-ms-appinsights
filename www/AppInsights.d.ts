declare module Microsoft.ApplicationInsights {
    enum LoggingSeverity {
        CRITICAL = 0,
        WARNING = 1,
    }
    class _InternalLogging {
        /**
         * Prefix of the traces in portal.
         */
        private static AiUserActionablePrefix;
        /**
         * For user non actionable traces use AI Internal prefix.
         */
        private static AiNonUserActionable;
        /**
         * Maximum queue size.
         */
        private static MAX_QUEUE_SIZE;
        /**
         * When this is true the SDK will throw exceptions to aid in debugging.
         */
        static enableDebugExceptions: () => boolean;
        /**
         * When this is true the SDK will throw exceptions to aid in debugging.
         */
        static verboseLogging: () => boolean;
        static queue: any[];
        /**
         * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
         */
        static throwInternalNonUserActionable(severity: LoggingSeverity, message: string): void;
        /**
         * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
         */
        static throwInternalUserActionable(severity: LoggingSeverity, message: string): void;
        /**
         * This will write a warning to the console if possible
         */
        static warn(message: string): void;
    }
}
declare module Microsoft.ApplicationInsights {
    class Util {
        private static document;
        /**
         * helper method to set userId and sessionId cookie
         */
        static setCookie(name: any, value: any): void;
        /**
         * helper method to access userId and sessionId cookie
         */
        static getCookie(name: any): string;
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        static trim(str: string): string;
        /**
         * generate GUID
         */
        static newGuid(): string;
        /**
         * Check if an object is of type Array
         */
        static isArray(obj: any): boolean;
        /**
         * Check if an object is of type Error
         */
        static isError(obj: any): boolean;
        /**
         * Check if an object is of type Date
         */
        static isDate(obj: any): boolean;
        /**
         * Convert a date to I.S.O. format in IE8
         */
        static toISOStringForIE8(date: Date): string;
        /**
         * Convert ms to c# time span format
         */
        static msToTimeSpan(totalms: number): string;
    }
}
declare module Microsoft.ApplicationInsights {
    interface ISerializable {
        /**
         * The set of fields for a serializeable object.
         * This defines the serialization order and a value of true/false
         * for each field defines whether the field is required or not.
         */
        aiDataContract: any;
    }
    class Serializer {
        /**
         * Serializes the current object to a JSON string.
         */
        static serialize(input: ISerializable): string;
        private static _serializeObject(source, name);
        private static _serializeArray(sources, name);
        private static _serializeStringMap(map, expectedType, name);
    }
}
declare module Microsoft.Telemetry {
    class Base {
        baseType: string;
        constructor();
    }
}
declare module Microsoft.Telemetry {
    class Envelope {
        ver: number;
        name: string;
        time: string;
        sampleRate: number;
        seq: string;
        iKey: string;
        flags: number;
        deviceId: string;
        os: string;
        osVer: string;
        appId: string;
        appVer: string;
        userId: string;
        tags: any;
        data: Base;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Envelope extends Microsoft.Telemetry.Envelope implements ISerializable {
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: any;
        /**
         * Constructs a new instance of telemetry data.
         */
        constructor(data: Microsoft.Telemetry.Base, name: string);
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Base extends Microsoft.Telemetry.Base implements ISerializable {
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: {};
    }
}
declare module AI {
    class ContextTagKeys {
        applicationVersion: string;
        applicationBuild: string;
        deviceId: string;
        deviceIp: string;
        deviceLanguage: string;
        deviceLocale: string;
        deviceModel: string;
        deviceNetwork: string;
        deviceOEMName: string;
        deviceOS: string;
        deviceOSVersion: string;
        deviceRoleInstance: string;
        deviceRoleName: string;
        deviceScreenResolution: string;
        deviceType: string;
        deviceMachineName: string;
        locationIp: string;
        operationId: string;
        operationName: string;
        operationParentId: string;
        operationRootId: string;
        operationSyntheticSource: string;
        operationIsSynthetic: string;
        sessionId: string;
        sessionIsFirst: string;
        sessionIsNew: string;
        userAccountAcquisitionDate: string;
        userAccountId: string;
        userAgent: string;
        userId: string;
        userStoreRegion: string;
        sampleRate: string;
        internalSdkVersion: string;
        internalAgentVersion: string;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Application {
        /**
         * The application version.
         */
        ver: string;
        /**
         * The application build version.
         */
        build: string;
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Device {
        /**
         * The type for the current device.
         */
        type: string;
        /**
         * A device unique ID.
         */
        id: string;
        /**
         * The device OEM for the current device.
         */
        oemName: string;
        /**
         * The device model for the current device.
         */
        model: string;
        /**
         * The IANA interface type for the internet connected network adapter.
         */
        network: number;
        /**
         * The application screen resolution.
         */
        resolution: string;
        /**
         * The current display language of the operating system.
         */
        locale: string;
        /**
         * The device id.
         */
        ip: string;
        /**
         * The device language.
         */
        language: string;
        /**
         * The OS name.
         */
        os: string;
        /**
         * The OS version.
         */
        osversion: string;
        /**
         * Constructs a new instance of the Device class
         */
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Internal {
        /**
         * The SDK version used to create this telemetry item.
         */
        sdkVersion: string;
        /**
         * The SDK agent version.
         */
        agentVersion: string;
        /**
        * Constructs a new instance of the internal telemetry data class.
        */
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Location {
        /**
         * Client IP address for reverse lookup
         */
        ip: string;
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Operation {
        id: string;
        name: string;
        parentId: string;
        rootId: string;
        syntheticSource: string;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class Sample {
        sampleRate: string;
    }
}
declare module AI {
    enum SessionState {
        Start = 0,
        End = 1,
    }
}
declare module Microsoft.ApplicationInsights.Context {
    interface ISessionConfig {
        sessionRenewalMs: () => number;
        sessionExpirationMs: () => number;
    }
    class Session {
        /**
         * The session ID.
         */
        id: string;
        /**
         * The true if this is the first session
         */
        isFirst: boolean;
        /**
         * The date at which this guid was genereated.
         * Per the spec the ID will be regenerated if more than acquisitionSpan milliseconds ellapse from this time.
         */
        acquisitionDate: number;
        /**
         * The date at which this session ID was last reported.
         * This value should be updated whenever telemetry is sent using this ID.
         * Per the spec the ID will be regenerated if more than renewalSpan milliseconds elapse from this time with no activity.
         */
        renewalDate: number;
    }
    class _SessionManager {
        static acquisitionSpan: number;
        static renewalSpan: number;
        automaticSession: Session;
        config: ISessionConfig;
        _sessionHandler: (sessionState: AI.SessionState, timestamp: number) => void;
        constructor(config: ISessionConfig, sessionHandler: (sessionState: AI.SessionState, timestamp: number) => void);
        update(): void;
        private initializeAutomaticSession();
        private renew();
        private setCookie(guid, acq, renewal);
    }
}
declare module Microsoft.ApplicationInsights.Context {
    class User {
        /**
         * The user ID.
         */
        id: string;
        /**
         * The account ID.
         */
        accountId: string;
        /**
         * The account acquisition date.
         */
        accountAcquisitionDate: string;
        /**
         * The user agent string.
         */
        agent: string;
        /**
         * The store region.
         */
        storeRegion: string;
        constructor(accountId: string);
    }
}
declare module Microsoft.ApplicationInsights {
    interface ISenderConfig {
        /**
         * The url to which payloads will be sent
         */
        endpointUrl: () => string;
        /**
        * The JSON format (normal vs line delimited). True means line delimited JSON.
        */
        emitLineDelimitedJson: () => boolean;
        /**
         * The maximum size of a batch in bytes
         */
        maxBatchSizeInBytes: () => number;
        /**
         * The maximum interval allowed between calls to batchInvoke
         */
        maxBatchInterval: () => number;
        /**
         * The master off switch.  Do not send any data if set to TRUE
         */
        disableTelemetry: () => boolean;
    }
    class Sender {
        private _buffer;
        private _lastSend;
        private _timeoutHandle;
        /**
         * The configuration for this sender instance
         */
        _config: ISenderConfig;
        /**
         * A method which will cause data to be send to the url
         */
        _sender: (payload: string) => void;
        /**
         * Constructs a new instance of the Sender class
         */
        constructor(config: ISenderConfig);
        /**
         * Add a telemetry item to the send buffer
         */
        send(envelope: Telemetry.Common.Envelope): void;
        private _getSizeInBytes(list);
        /**
         * Immediately sennd buffered data
         */
        triggerSend(): void;
        /**
         * Send XMLHttpRequest
         */
        private _xhrSender(payload);
        /**
         * Send XDomainRequest
         */
        private _xdrSender(payload);
        /**
         * xhr state changes
         */
        static _xhrReadyStateChange(xhr: XMLHttpRequest, payload: string): void;
        /**
         * xdr state changes
         */
        static _xdrOnLoad(xdr: XDomainRequest, payload: string): void;
        /**
         * error handler
         */
        static _onError(payload: string, message: string, event?: ErrorEvent): void;
        /**
         * success handler
         */
        static _onSuccess(payload: string): void;
    }
}
declare module Microsoft.Telemetry {
    class Domain {
        constructor();
    }
}
declare module AI {
    enum SeverityLevel {
        Verbose = 0,
        Information = 1,
        Warning = 2,
        Error = 3,
        Critical = 4,
    }
}
declare module AI {
    class MessageData extends Microsoft.Telemetry.Domain {
        ver: number;
        message: string;
        severityLevel: AI.SeverityLevel;
        properties: any;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class DataSanitizer {
        /**
        * Max length allowed for custom names.
        */
        private static MAX_NAME_LENGTH;
        /**
         * Max length allowed for custom values.
         */
        private static MAX_STRING_LENGTH;
        /**
         * Max length allowed for url.
         */
        private static MAX_URL_LENGTH;
        /**
         * Max length allowed for messages.
         */
        private static MAX_MESSAGE_LENGTH;
        /**
         * Max length allowed for exceptions.
         */
        private static MAX_EXCEPTION_LENGTH;
        static sanitizeKeyAndAddUniqueness(key: any, map: any): any;
        static sanitizeKey(name: any): any;
        static sanitizeString(value: any): any;
        static sanitizeUrl(url: any): any;
        static sanitizeMessage(message: any): any;
        static sanitizeException(exception: any): any;
        static sanitizeProperties(properties: any): any;
        static sanitizeMeasurements(measurements: any): any;
        static padNumber(num: any): string;
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Trace extends AI.MessageData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            message: boolean;
            severityLevel: boolean;
            measurements: boolean;
            properties: boolean;
        };
        /**
         * Constructs a new instance of the MetricTelemetry object
         */
        constructor(message: string, properties?: Object);
    }
}
declare module AI {
    class EventData extends Microsoft.Telemetry.Domain {
        ver: number;
        name: string;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Event extends AI.EventData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            name: boolean;
            properties: boolean;
            measurements: boolean;
        };
        /**
         * Constructs a new instance of the EventTelemetry object
         */
        constructor(name: string, properties?: Object, measurements?: Object);
    }
}
declare module AI {
    class ExceptionDetails {
        id: number;
        outerId: number;
        typeName: string;
        message: string;
        hasFullStack: boolean;
        stack: string;
        parsedStack: StackFrame[];
        constructor();
    }
}
declare module AI {
    class ExceptionData extends Microsoft.Telemetry.Domain {
        ver: number;
        handledAt: string;
        exceptions: ExceptionDetails[];
        severityLevel: AI.SeverityLevel;
        problemId: string;
        crashThreadId: number;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module AI {
    class StackFrame {
        level: number;
        method: string;
        assembly: string;
        fileName: string;
        line: number;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Exception extends AI.ExceptionData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            handledAt: boolean;
            exceptions: boolean;
            severityLevel: boolean;
            properties: boolean;
            measurements: boolean;
        };
        /**
        * Constructs a new isntance of the ExceptionTelemetry object
        */
        constructor(exception: Error, handledAt?: string, properties?: Object, measurements?: Object);
    }
}
declare module AI {
    class MetricData extends Microsoft.Telemetry.Domain {
        ver: number;
        metrics: DataPoint[];
        properties: any;
        constructor();
    }
}
declare module AI {
    enum DataPointType {
        Measurement = 0,
        Aggregation = 1,
    }
}
declare module AI {
    class DataPoint {
        name: string;
        kind: AI.DataPointType;
        value: number;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class DataPoint extends AI.DataPoint implements ISerializable {
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: {
            name: boolean;
            kind: boolean;
            value: boolean;
            count: boolean;
            min: boolean;
            max: boolean;
            stdDev: boolean;
        };
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class Metric extends AI.MetricData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            metrics: boolean;
            properties: boolean;
        };
        /**
         * Constructs a new instance of the MetricTelemetry object
         */
        constructor(name: string, value: number, count?: number, min?: number, max?: number);
    }
}
declare module AI {
    class PageViewData extends AI.EventData {
        ver: number;
        url: string;
        name: string;
        duration: string;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class PageView extends AI.PageViewData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            name: boolean;
            url: boolean;
            duration: boolean;
            properties: boolean;
            measurement: boolean;
        };
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        constructor(name?: string, url?: string, durationMs?: number, properties?: any, measurements?: any);
    }
}
declare module AI {
    class PageViewPerfData extends AI.PageViewData {
        ver: number;
        url: string;
        perfTotal: string;
        name: string;
        duration: string;
        networkConnect: string;
        sentRequest: string;
        receivedResponse: string;
        domProcessing: string;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class PageViewPerformance extends AI.PageViewPerfData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            name: boolean;
            url: boolean;
            duration: boolean;
            perfTotal: boolean;
            networkConnect: boolean;
            sentRequest: boolean;
            receivedResponse: boolean;
            domProcessing: boolean;
            properties: boolean;
            measurement: boolean;
        };
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        constructor(name: string, url: string, durationMs: number, properties?: any, measurements?: any);
        static getPerformanceTiming(): PerformanceTiming;
        /**
         * Returns undefined if not available, true if ready, false otherwise
         */
        static checkPageLoad(): any;
        static getDuration(start: any, end: any): number;
    }
}
declare module AI {
    class SessionStateData extends Microsoft.Telemetry.Domain {
        ver: number;
        state: AI.SessionState;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry {
    class SessionTelemetry extends AI.SessionStateData implements ISerializable {
        static envelopeType: string;
        static dataType: string;
        aiDataContract: {
            ver: boolean;
            state: boolean;
        };
        constructor(state: AI.SessionState);
    }
}
declare module Microsoft.ApplicationInsights {
    interface ITelemetryConfig extends ISenderConfig {
        instrumentationKey: () => string;
        accountId: () => string;
        sessionRenewalMs: () => number;
        sessionExpirationMs: () => number;
    }
    class TelemetryContext {
        /**
         * The configuration for this telemetry context
         */
        _config: ITelemetryConfig;
        /**
         * The sender instance for this context
         */
        _sender: Sender;
        /**
         * The object describing a component tracked by this object.
         */
        application: Context.Application;
        /**
         * The object describing a device tracked by this object.
         */
        device: Context.Device;
        internal: Context.Internal;
        /**
         * The object describing a location tracked by this object.
         */
        location: Context.Location;
        /**
         * The object describing a operation tracked by this object.
         */
        operation: Context.Operation;
        sample: Context.Sample;
        /**
         * The object describing a user tracked by this object.
         */
        user: Context.User;
        /**
         * The object describing a session tracked by this object.
         */
        session: Context.Session;
        /**
         * The session manager that manages session on the base of cookies.
         */
        _sessionManager: Microsoft.ApplicationInsights.Context._SessionManager;
        constructor(config: ITelemetryConfig);
        /**
         * Use Sender.ts to send telemetry object to the endpoint
         */
        track(envelope: Telemetry.Common.Envelope): Telemetry.Common.Envelope;
        private _track(envelope);
        private static _sessionHandler(tc, sessionState, timestamp);
        private _applyApplicationContext(envelope, appContext);
        private _applyDeviceContext(envelope, deviceContext);
        private _applyInternalContext(envelope, internalContext);
        private _applyLocationContext(envelope, locationContext);
        private _applyOperationContext(envelope, operationContext);
        private _applySampleContext(envelope, sampleContext);
        private _applySessionContext(envelope, sessionContext);
        private _applyUserContext(envelope, userContext);
    }
}
declare module Microsoft.Telemetry {
    class Data<TDomain> extends Microsoft.Telemetry.Base {
        baseType: string;
        baseData: TDomain;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights.Telemetry.Common {
    class Data<TDomain> extends Microsoft.Telemetry.Data<TDomain> implements ISerializable {
        /**
         * The data contract for serializing this object.
         */
        aiDataContract: {
            baseType: boolean;
            baseData: boolean;
        };
        /**
         * Constructs a new instance of telemetry data.
         */
        constructor(type: string, data: TDomain);
    }
}
declare module Microsoft.ApplicationInsights {
    var Version: string;
    interface IConfig {
        instrumentationKey: string;
        endpointUrl: string;
        emitLineDelimitedJson: boolean;
        accountId: string;
        appUserId: string;
        sessionRenewalMs: number;
        sessionExpirationMs: number;
        maxBatchSizeInBytes: number;
        maxBatchInterval: number;
        enableDebug: boolean;
        autoCollectErrors: boolean;
        disableTelemetry: boolean;
        verboseLogging: boolean;
        diagnosticLogInterval: number;
    }
    /**
     * The main API that sends telemetry to Application Insights.
     * Learn more: http://go.microsoft.com/fwlink/?LinkID=401493
     */
    class AppInsights {
        private _eventTracking;
        private _pageTracking;
        config: IConfig;
        context: TelemetryContext;
        static defaultConfig: IConfig;
        constructor(config: IConfig);
        /**
         * Starts timing how long the user views a page or other item. Call this when the page opens.
         * This method doesn't send any telemetry. Call {@link stopTrackTelemetry} to log the page when it closes.
         * @param   name  A string that idenfities this item, unique within this HTML document. Defaults to the document title.
         */
        startTrackPage(name?: string): void;
        /**
         * Logs how long a page or other item was visible, after {@link startTrackPage}. Call this when the page closes.
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        stopTrackPage(name?: string, url?: string, properties?: Object, measurements?: Object): void;
        /**
         * Logs that a page or other item was viewed.
         * @param   name  The string you used as the name in startTrackPage. Defaults to the document title.
         * @param   url   String - a relative or absolute URL that identifies the page or other item. Defaults to the window location.
         * @param   properties  map[string, string] - additional data used to filter pages and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this page, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        trackPageView(name?: string, url?: string, properties?: Object, measurements?: Object): void;
        /**
         * Start timing an extended event. Call {@link stopTrackEvent} to log the event when it ends.
         * @param   name    A string that identifies this event uniquely within the document.
         */
        startTrackEvent(name: string): void;
        /**
         * Log an extended event that you started timing with {@link startTrackEvent}.
         * @param   name    The string you used to identify this event in startTrackEvent.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        stopTrackEvent(name: string, properties?: Object, measurements?: Object): void;
        /**
         * Log a user action or other occurrence.
         * @param   name    A string to identify this event in the portal.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        trackEvent(name: string, properties?: Object, measurements?: Object): void;
        /**
         * Log an exception you have caught.
         * @param   exception   An Error from a catch clause, or the string error message.
         * @param   properties  map[string, string] - additional data used to filter events and metrics in the portal. Defaults to empty.
         * @param   measurements    map[string, number] - metrics associated with this event, displayed in Metrics Explorer on the portal. Defaults to empty.
         */
        trackException(exception: Error, handledAt?: string, properties?: Object, measurements?: Object): void;
        /**
         * Log a numeric value that is not associated with a specific event. Typically used to send regular reports of performance indicators.
         * To send a single measurement, use just the first two parameters. If you take measurements very frequently, you can reduce the
         * telemetry bandwidth by aggregating multiple measurements and sending the resulting average at intervals.
         * @param   name    A string that identifies the metric.
         * @param   average Number representing either a single measurement, or the average of several measurements.
         * @param   sampleCount The number of measurements represented by the average. Defaults to 1.
         * @param   min The smallest measurement in the sample. Defaults to the average.
         * @param   max The largest measurement in the sample. Defaults to the average.
         */
        trackMetric(name: string, average: number, sampleCount?: number, min?: number, max?: number): void;
        trackTrace(message: string, properties?: Object): void;
        /**
         * Immediately send all queued telemetry.
         */
        flush(): void;
        _onerror(message: string, url: string, lineNumber: number, columnNumber: number, error: Error): void;
    }
}
declare module AI {
    class AjaxCallData extends AI.PageViewData {
        ver: number;
        url: string;
        ajaxUrl: string;
        name: string;
        duration: string;
        requestSize: number;
        responseSize: number;
        timeToFirstByte: string;
        timeToLastByte: string;
        callbackDuration: string;
        responseCode: string;
        success: boolean;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module AI {
    enum DependencyKind {
        SQL = 0,
        Http = 1,
        Other = 2,
    }
}
declare module AI {
    enum DependencySourceType {
        Undefined = 0,
        Aic = 1,
        Apmc = 2,
    }
}
declare module AI {
    class RemoteDependencyData extends Microsoft.Telemetry.Domain {
        ver: number;
        name: string;
        kind: AI.DataPointType;
        value: number;
        count: number;
        min: number;
        max: number;
        stdDev: number;
        dependencyKind: AI.DependencyKind;
        success: boolean;
        async: boolean;
        dependencySource: AI.DependencySourceType;
        commandName: string;
        dependencyTypeName: string;
        properties: any;
        constructor();
    }
}
declare module AI {
    class RequestData extends Microsoft.Telemetry.Domain {
        ver: number;
        id: string;
        name: string;
        startTime: string;
        duration: string;
        responseCode: string;
        success: boolean;
        httpMethod: string;
        url: string;
        properties: any;
        measurements: any;
        constructor();
    }
}
declare module Microsoft.ApplicationInsights {
    interface Snippet {
        queue: Array<() => void>;
        config: IConfig;
    }
    class Initialization {
        snippet: Snippet;
        config: IConfig;
        constructor(snippet: Snippet);
        loadAppInsights(): AppInsights;
        emptyQueue(): void;
        pollInteralLogs(appInsightsInstance: AppInsights): number;
        static getDefaultConfig(config?: IConfig): IConfig;
    }
}
declare function initializeAppInsights(): void;