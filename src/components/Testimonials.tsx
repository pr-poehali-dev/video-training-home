import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      age: "28 лет",
      avatar: "/placeholder.svg",
      text: "За 4 недели похудела на 6 кг! Программа супер удобная, тренировки короткие но эффективные. Тренер всегда на связи и поддерживает. Рекомендую всем!",
      rating: 5,
      result: "-6 кг за месяц",
    },
    {
      name: "Мария Козлова",
      age: "34 года",
      avatar: "/placeholder.svg",
      text: "Долго искала программу для занятых мам. Здесь идеально всё продумано - можно заниматься дома, когда ребёнок спит. Результат виден уже через 2 недели!",
      rating: 5,
      result: "Подтянутая фигура",
    },
    {
      name: "Елена Сидорова",
      age: "25 лет",
      avatar: "/placeholder.svg",
      text: "Впервые за много лет смогла довести программу до конца! Очень мотивирует поддержка в телеграме и видимый прогресс. Планирую продолжать заниматься!",
      rating: 5,
      result: "-4 кг и тонус мышц",
    },
    {
      name: "Ольга Васильева",
      age: "31 год",
      avatar: "/placeholder.svg",
      text: "Отличная программа для возвращения в форму после родов. Упражнения безопасные, план питания реальный. За месяц привела себя в порядок!",
      rating: 5,
      result: "Восстановление после родов",
    },
    {
      name: "Светлана Морозова",
      age: "29 лет",
      avatar: "/placeholder.svg",
      text: "Тренер - просто золото! Всегда отвечает на вопросы, корректирует программу под мои особенности. Результат превзошёл все ожидания!",
      rating: 5,
      result: "-5 кг и уверенность",
    },
    {
      name: "Юлия Николаева",
      age: "27 лет",
      avatar: "/placeholder.svg",
      text: "Короткие тренировки идеально вписались в мой график. Не нужно тратить часы в зале - 20-30 минут дома и результат потрясающий!",
      rating: 5,
      result: "Стройная фигура",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Истории успеха наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 2000 женщин уже изменили свою жизнь с нашей программой
          </p>

          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">2000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.9</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">95%</div>
              <div className="text-gray-600">Завершают программу</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="TrendingUp"
                      size={16}
                      className="text-purple-600"
                    />
                    <span className="font-semibold text-purple-700">
                      Результат: {testimonial.result}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <Icon name="Quote" size={32} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-4">
              "Я никогда не думала, что смогу так изменить свою фигуру всего за
              месяц! Это действительно работает!"
            </p>
            <div className="flex items-center justify-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-white/20 text-white">
                  ТК
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold">Татьяна Крылова</div>
                <div className="text-purple-200 text-sm">Результат: -7 кг</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
