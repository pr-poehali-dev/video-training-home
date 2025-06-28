import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Преобрази себя за
            <span className="text-orange-400 block">4 недели</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Комплексная программа тренировок для начинающих. 15+ видов
            тренировок, 30-дневный план питания и поддержка тренера
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-semibold rounded-full"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать тренировки
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full"
            >
              <Icon name="Info" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-scale-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Calendar"
              size={32}
              className="text-orange-400 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">4 недели</h3>
            <p className="text-purple-100">Структурированная программа</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="Users"
              size={32}
              className="text-orange-400 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Для начинающих</h3>
            <p className="text-purple-100">Любой уровень подготовки</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Icon
              name="MessageCircle"
              size={32}
              className="text-orange-400 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Поддержка 24/7</h3>
            <p className="text-purple-100">Связь с тренером в Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
