using Microsoft.AspNetCore.SignalR;

namespace BackBeam.Hubs;

public interface IPhotoClient
{
    /// <summary>
    /// Receive photo data in base64 format
    /// </summary>
    /// <param name="photoB64">Raw image data encoded in base64</param>
    void ReceivePhoto(string photoB64);
}

public class PhotoHub : Hub<IPhotoClient>
{
    private readonly ISessionCollection _sessionCollection;

    public PhotoHub(ISessionCollection sessionCollection)
    {
        _sessionCollection = sessionCollection;
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        _sessionCollection.RemoveHost(Context.ConnectionId);
        await base.OnDisconnectedAsync(exception);
    }

    /// <summary>
    /// Host a session for controllers to send photos to
    /// </summary>
    /// <param name="sessionId">Unique session id to host</param>
    void OpenSession(string sessionId)
    {
        if (_sessionCollection.SessionHost(sessionId) != null)
            throw new Exception($"A host is already connected to session {sessionId}.");

        _sessionCollection.AddHost(sessionId, Context.ConnectionId);
    }

    /// <summary>
    /// Control an existing photo session
    /// </summary>
    /// <param name="sessionId">Unique session id to control</param>
    void ControlSession(string sessionId)
    {
        var sessionHost = _sessionCollection.SessionHost(sessionId);
        if (sessionHost == null)
            throw new Exception($"No session exists with id {sessionId}.");

        if (sessionHost == Context.ConnectionId)
            throw new Exception($"Unable to host and control the same session {sessionId}");

        _sessionCollection.AddController(sessionId, Context.ConnectionId);
    }

    /// <summary>
    /// Send a photo to the host of the connected photo session
    /// </summary>
    /// <param name="photoB64">Raw image data encoded in base64</param>
    void SendPhoto(string photoB64)
    {
        var hostConnection = _sessionCollection.ControlledHost(Context.ConnectionId);
        Clients.Client(hostConnection).ReceivePhoto(photoB64);
    }
}