import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TelegramWidget = () => {
  const handleTelegramClick = () => {
    // Здесь будет ссылка на реальный Telegram канал/бот
    window.open("https://t.me/your_fitness_bot", "_blank");
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Связь с тренером 24/7
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Получайте поддержку, задавайте вопросы и делитесь результатами в
            нашем Telegram-сообществе
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Персональная поддержка
                </h3>
                <p className="text-gray-400">
                  Прямая связь с сертифицированным тренером для консультаций и
                  мотивации
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Сообщество единомышленников
                </h3>
                <p className="text-gray-400">
                  Общайтесь с другими участниками программы, делитесь успехами и
                  получайте мотивацию
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Присоединяйтесь к нашему Telegram
                </h3>
                <p className="text-blue-100">
                  Получайте ежедневные советы, мотивацию и поддержку от тренера
                </p>
              </div>
              <Button
                onClick={handleTelegramClick}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full flex-shrink-0"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Открыть Telegram
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Clock" size={16} />
              <span>Ответ в течение часа</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Shield" size={16} />
              <span>Безопасное общение</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Icon name="Zap" size={16} />
              <span>Мгновенные уведомления</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramWidget;
