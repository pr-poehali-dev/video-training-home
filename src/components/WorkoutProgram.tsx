import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const WorkoutProgram = () => {
  const workoutTypes = [
    {
      id: 1,
      name: "Разминка перед тренировкой",
      icon: "Zap",
      duration: "10 мин",
      level: "Начинающий",
    },
    {
      id: 2,
      name: "Прощайте обвисшие руки",
      icon: "Dumbbell",
      duration: "20 мин",
      level: "Начинающий",
    },
    {
      id: 3,
      name: "Прожарка ягодиц",
      icon: "Target",
      duration: "25 мин",
      level: "Средний",
    },
    {
      id: 4,
      name: "Сжигаем ушки на бёдрах",
      icon: "Flame",
      duration: "30 мин",
      level: "Средний",
    },
    {
      id: 5,
      name: "Огненная тренировка пресса",
      icon: "Zap",
      duration: "15 мин",
      level: "Начинающий",
    },
    {
      id: 6,
      name: "Убираем складки на спине",
      icon: "Activity",
      duration: "20 мин",
      level: "Начинающий",
    },
    {
      id: 7,
      name: "Укрепляем мышцы кора",
      icon: "Shield",
      duration: "25 мин",
      level: "Средний",
    },
    {
      id: 8,
      name: "Топ 5 упражнений для красивой спины",
      icon: "Award",
      duration: "15 мин",
      level: "Начинающий",
    },
    {
      id: 9,
      name: "Топ 5 упражнений на пресс",
      icon: "Star",
      duration: "12 мин",
      level: "Начинающий",
    },
    {
      id: 10,
      name: "Топ 5 упражнений на ягодицы",
      icon: "Trophy",
      duration: "18 мин",
      level: "Начинающий",
    },
    {
      id: 11,
      name: "Кардио",
      icon: "Heart",
      duration: "30 мин",
      level: "Средний",
    },
    {
      id: 12,
      name: "Утренняя зарядка",
      icon: "Sun",
      duration: "15 мин",
      level: "Начинающий",
    },
    {
      id: 13,
      name: "Растяжка для новичков",
      icon: "Maximize",
      duration: "20 мин",
      level: "Начинающий",
    },
    {
      id: 14,
      name: "Тренировка для снятия стресса",
      icon: "Smile",
      duration: "25 мин",
      level: "Начинающий",
    },
    {
      id: 15,
      name: "Внутренняя поверхность бедра",
      icon: "Target",
      duration: "20 мин",
      level: "Средний",
    },
  ];

  const specialPrograms = [
    {
      name: "Для беременных",
      icon: "Baby",
      description: "Безопасные тренировки в период беременности",
    },
    {
      name: "На ГВ",
      icon: "Heart",
      description: "Программа для мам в период грудного вскармливания",
    },
    {
      name: "Для новичков",
      icon: "Play",
      description: "Базовая программа для начала занятий",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            15+ видов тренировок
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            От разминки до интенсивного кардио — найдите идеальную тренировку
            для ваших целей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {workoutTypes.map((workout) => (
            <Card
              key={workout.id}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    name={workout.icon}
                    size={24}
                    className="text-purple-600"
                  />
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {workout.duration}
                    </Badge>
                    <Badge
                      variant={
                        workout.level === "Начинающий" ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {workout.level}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {workout.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-purple-600 hover:text-purple-700">
                  <Icon name="Play" size={16} className="mr-2" />
                  <span className="font-medium">Начать тренировку</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Специальные программы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={program.icon}
                    size={28}
                    className="text-purple-600"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.name}
                </h4>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutProgram;
