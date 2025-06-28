import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PricingPlans = () => {
  const plans = [
    {
      name: "Базовый",
      price: "2 990",
      originalPrice: "4 990",
      period: "4 недели",
      popular: false,
      features: [
        "15+ видов тренировок",
        "План питания на 30 дней",
        "Доступ к мобильному приложению",
        "Базовая поддержка в Telegram",
        "Календарь тренировок",
      ],
      buttonText: "Выбрать план",
      color: "from-gray-100 to-gray-200",
    },
    {
      name: "Премиум",
      price: "4 990",
      originalPrice: "7 990",
      period: "4 недели",
      popular: true,
      features: [
        "Всё из базового плана",
        "Персональные консультации тренера",
        "Индивидуальный план питания",
        "Приоритетная поддержка 24/7",
        "Дополнительные тренировки",
        "Трекинг прогресса",
        "Сертификат об окончании",
      ],
      buttonText: "Начать сейчас",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "VIP",
      price: "7 990",
      originalPrice: "12 990",
      period: "4 недели",
      popular: false,
      features: [
        "Всё из премиум плана",
        "Персональные видео-консультации",
        "Индивидуальная программа тренировок",
        "Разбор техники упражнений",
        "Еженедельные звонки с тренером",
        "Доступ к закрытому сообществу",
        "Гарантия результата",
      ],
      buttonText: "Получить VIP",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Выберите свой план
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы подготовили несколько вариантов для разных потребностей и
            бюджетов
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Icon name="Clock" size={16} />
            <span className="font-medium">
              Акция до конца месяца - скидка 40%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "ring-2 ring-purple-500 shadow-2xl"
                  : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center py-2 text-sm font-semibold">
                    🔥 Самый популярный
                  </div>
                </div>
              )}

              <CardHeader
                className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}
              >
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <div className="text-left">
                      <div className="line-through text-gray-400 text-lg">
                        {plan.originalPrice}
                      </div>
                      <div className="text-gray-600 text-sm">
                        ₽ за {plan.period}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-700"
                  >
                    Экономия{" "}
                    {parseInt(plan.originalPrice) - parseInt(plan.price)} ₽
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mt-1 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full mt-6 h-12 text-lg font-semibold ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                </Button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  <Icon name="Shield" size={14} className="inline mr-1" />
                  Гарантия возврата средств 14 дней
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Не знаете какой план выбрать? Мы поможем определиться!
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
