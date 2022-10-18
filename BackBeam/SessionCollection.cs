namespace BackBeam;

public interface ISessionCollection
{
    string? SessionHost(string sessionId);
    void AddHost(string sessionId, string connectionId);
    void RemoveHost(string connectionId);
    void AddController(string sessionId, string connectionId);
    string ControlledHost(string controllerConnectionId);
}

public class SessionCollection : ISessionCollection
{
    private Dictionary<string, string> _controllerConnectionToSession;
    private Dictionary<string, string> _sessionToHostConnection;
    private Dictionary<string, string> _hostConnectionToSession;

    public SessionCollection()
    {
        _controllerConnectionToSession = new Dictionary<string, string>();
        _sessionToHostConnection = new Dictionary<string, string>();
        _hostConnectionToSession = new Dictionary<string, string>();
    }

    public string? SessionHost(string sessionId)
    {
        return _sessionToHostConnection.GetValueOrDefault(sessionId);
    }

    public void AddHost(string sessionId, string connectionId)
    {
        _sessionToHostConnection[sessionId] = connectionId;
        _hostConnectionToSession[connectionId] = sessionId;
    }

    public void RemoveHost(string connectionId)
    {
        var sessionId = _hostConnectionToSession.GetValueOrDefault(connectionId);

        if (sessionId == null)
            return;

        _hostConnectionToSession.Remove(connectionId);
        _sessionToHostConnection.Remove(sessionId);
    }

    public void AddController(string sessionId, string connectionId)
    {
        _controllerConnectionToSession[connectionId] = sessionId;
    }

    public string ControlledHost(string controllerConnectionId)
    {
        var sessionId = _controllerConnectionToSession[controllerConnectionId];
        return _sessionToHostConnection[sessionId];
    }
}
