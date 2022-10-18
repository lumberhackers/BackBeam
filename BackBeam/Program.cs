using BackBeam;
using BackBeam.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddSingleton<ISessionCollection, SessionCollection>();
builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddCors();

var app = builder.Build();

// Configure CORS for SignalR
// https://learn.microsoft.com/en-us/aspnet/core/signalr/security?view=aspnetcore-6.0#cross-origin-resource-sharing
//
// TODO: we need this to be configurable with an ENV var on launch
// ALLOWED_ORIGINS="http://127.0.0.1:5173,https://127.0.0.1:5173,https://integration.example.com"
app.UseCors(corsPolicyBuilder =>
{
    corsPolicyBuilder.WithOrigins(new[] { "http://127.0.0.1:5173", "https://127.0.0.1:5173" })
        .AllowAnyHeader()
        .WithMethods("GET", "POST")
        .AllowCredentials();
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();
app.MapHub<PhotoHub>("/photos");

app.Run();