import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет отправка формы
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Начните прямо сейчас
            </h2>
            <p className="text-xl text-gray-600">
              Заполните форму и получите персональную программу тренировок
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                <Icon name="Clipboard" size={24} className="text-purple-600" />
                Заявка на программу
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-700 font-medium">
                    Уровень подготовки *
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, level: value })
                    }
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите ваш уровень" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Начинающий</SelectItem>
                      <SelectItem value="intermediate">Средний</SelectItem>
                      <SelectItem value="advanced">Продвинутый</SelectItem>
                      <SelectItem value="returning">
                        Возвращаюсь к спорту
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-gray-700 font-medium">
                    Ваши цели
                  </Label>
                  <Textarea
                    id="goals"
                    placeholder="Расскажите о ваших целях: похудение, набор мышечной массы, общее укрепление здоровья..."
                    value={formData.goals}
                    onChange={(e) =>
                      setFormData({ ...formData, goals: e.target.value })
                    }
                    className="min-h-24 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <Icon
                    name="Shield"
                    size={16}
                    className="inline mr-2 text-purple-600"
                  />
                  Ваши данные защищены и не передаются третьим лицам
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
