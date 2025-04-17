using Microsoft.EntityFrameworkCore;
using AiTodoApi.Models;

namespace AiTodoApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<TodoTask> TodoTasks { get; set; }
}
