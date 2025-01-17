import { AppDataSource } from "../../data-source"
import { Habits } from "../../entities/habits.entity"

export const updateHabitWeekDaysService = async (
  habitId: string,
  weekDays: string[],
): Promise<Habits> => {
  const habitRepository = AppDataSource.getRepository(Habits)

  const habit = await habitRepository.findOneBy({ id: habitId })
  if (!habit) {
    throw new Error("Hábito não encontrado")
  }

  habit.weekDays = weekDays
  await habitRepository.save(habit)

  return habit
}
