try
{
    Console.WriteLine("Inicio");
    var builder = WebApplication.CreateBuilder(args);
    // Add services to the container.

    var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

    builder.Services.AddCors(options =>
    {
        options.AddPolicy(name: MyAllowSpecificOrigins,
                          policy =>
                          {
                              policy.AllowAnyHeader();
                              policy.AllowAnyOrigin();
                              policy.AllowAnyMethod();
                          });
    });

    builder.Services.AddControllers();
    // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    builder.Services.AddHealthChecks();

    var app = builder.Build();

    app.MapHealthChecks("/health");

    // Configure the HTTP request pipeline.
    //if (app.Environment.IsDevelopment())
    //{
    app.UseSwagger();
    app.UseSwaggerUI();
    //}

    //app.UseHttpsRedirection();
    app.UseCors();
    app.UseAuthorization();

    app.UseDefaultFiles();
    app.UseStaticFiles();

    app.MapControllers().RequireCors(MyAllowSpecificOrigins);


    app.Run();

}
catch (Exception e)
{
    Console.WriteLine(e.Message);
}