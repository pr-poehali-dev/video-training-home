import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "Timer",
      title: "Экономия времени",
      description: "Короткие эффективные тренировки от 10 до 30 минут",
    },
    {
      icon: "Home",
      title: "Дома или в зале",
      description:
        "Выполняйте упражнения где удобно без дополнительного оборудования",
    },
    {
      icon: "TrendingUp",
      title: "Видимый результат",
      description: "Первые изменения уже через 2 недели регулярных тренировок",
    },
    {
      icon: "Users",
      title: "Поддержка сообщества",
      description: "Общение с единомышленниками и советы от тренера",
    },
    {
      icon: "BookOpen",
      title: "План питания",
      description: "30-дневный план питания с рецептами и рекомендациями",
    },
    {
      icon: "Smartphone",
      title: "Мобильное приложение",
      description: "Тренируйтесь с любого устройства в любое время",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создали программу, которая действительно работает и подходит для
            занятых людей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Icon name={benefit.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
