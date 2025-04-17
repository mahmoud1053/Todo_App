namespace AiTodoApi.Models;

public class TodoTask
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Category { get; set; }
    public string? DueDate { get; set; }
    public bool IsDone { get; set; } = false;
}
