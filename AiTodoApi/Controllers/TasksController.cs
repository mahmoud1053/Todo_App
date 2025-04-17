using Microsoft.AspNetCore.Mvc;
using AiTodoApi.Data;
using AiTodoApi.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace AiTodoApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoTask>>> GetTasks() =>
        await _context.TodoTasks.ToListAsync();

    [HttpPost]
    public async Task<ActionResult<TodoTask>> AddTask(TodoTask task)
    {
        _context.TodoTasks.Add(task);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, TodoTask updated)
    {
        var task = await _context.TodoTasks.FindAsync(id);
        if (task == null) return NotFound();
        task.Title = updated.Title;
        task.Category = updated.Category;
        task.DueDate = updated.DueDate;
        task.IsDone = updated.IsDone;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _context.TodoTasks.FindAsync(id);
        if (task == null) return NotFound();
        _context.TodoTasks.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
