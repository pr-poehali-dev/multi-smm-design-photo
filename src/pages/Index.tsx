import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

type Category = 'all' | 'smm' | 'design' | 'photo';

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  image: string;
  description: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [activeSection, setActiveSection] = useState('home');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Фотосессия бренда',
      category: 'photo',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/af6a2387-cbd8-4460-9abe-259d16194ee0.jpg',
      description: 'Профессиональная предметная съёмка'
    },
    {
      id: 2,
      title: 'SMM стратегия',
      category: 'smm',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/7f454408-c178-4950-901b-0f2503850314.jpg',
      description: 'Комплексное продвижение в соцсетях'
    },
    {
      id: 3,
      title: 'Дизайн лендинга',
      category: 'design',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/62c80eaf-f13a-4ced-9b81-aaede16635c3.jpg',
      description: 'Современный минималистичный дизайн'
    },
    {
      id: 4,
      title: 'Портретная фотография',
      category: 'photo',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/af6a2387-cbd8-4460-9abe-259d16194ee0.jpg',
      description: 'Художественные портреты'
    },
    {
      id: 5,
      title: 'Контент для Instagram',
      category: 'smm',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/7f454408-c178-4950-901b-0f2503850314.jpg',
      description: 'Создание визуального контента'
    },
    {
      id: 6,
      title: 'Брендинг',
      category: 'design',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/62c80eaf-f13a-4ced-9b81-aaede16635c3.jpg',
      description: 'Разработка фирменного стиля'
    }
  ];

  const services = [
    {
      icon: 'Camera',
      title: 'Фотография',
      description: 'Предметная, портретная и событийная съёмка с профессиональной обработкой'
    },
    {
      icon: 'Palette',
      title: 'Дизайн',
      description: 'Создание логотипов, брендинга, веб-дизайна и графических материалов'
    },
    {
      icon: 'Share2',
      title: 'SMM',
      description: 'Продвижение в социальных сетях, создание контента и стратегии'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '5 трендов в дизайне 2024',
      date: '15 октября 2024',
      excerpt: 'Какие тенденции будут определять визуальную коммуникацию в ближайшее время',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/62c80eaf-f13a-4ced-9b81-aaede16635c3.jpg'
    },
    {
      id: 2,
      title: 'Секреты продающих фото',
      date: '8 октября 2024',
      excerpt: 'Как создавать фотографии, которые привлекают внимание и продают',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/af6a2387-cbd8-4460-9abe-259d16194ee0.jpg'
    },
    {
      id: 3,
      title: 'Instagram в 2024: что работает',
      date: '1 октября 2024',
      excerpt: 'Актуальные стратегии продвижения и создания контента в Instagram',
      image: 'https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/7f454408-c178-4950-901b-0f2503850314.jpg'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/b191336b-5277-4aa4-8116-22167d21aaeb/files/4d49fe4a-0deb-487d-a83a-4c5a64c3ac87.png" 
                alt="Логотип" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'portfolio', 'services', 'about', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Создаю визуальные<br />истории для брендов
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              SMM-специалист, дизайнер и фотограф. Помогаю бизнесу выделиться через креативный контент и стратегию
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => scrollToSection('portfolio')} className="gap-2">
                Смотреть работы
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground">Избранные работы и проекты</p>
          </div>

          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {[
              { id: 'all', label: 'Все работы' },
              { id: 'photo', label: 'Фотография' },
              { id: 'design', label: 'Дизайн' },
              { id: 'smm', label: 'SMM' }
            ].map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id as Category)}
                className="transition-all"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <Badge className="mb-2 bg-secondary">
                        {item.category === 'photo' && 'Фотография'}
                        {item.category === 'design' && 'Дизайн'}
                        {item.category === 'smm' && 'SMM'}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Услуги</h2>
            <p className="text-lg text-muted-foreground">Комплексный подход к визуальной коммуникации</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Обо мне</h2>
          </div>

          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Привет! Я — креативный специалист с опытом работы в сфере визуальных коммуникаций более 5 лет. 
                Моя миссия — помогать брендам рассказывать их истории через качественный контент.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Работаю на стыке трёх направлений: создаю визуальный контент (фотография), проектирую 
                дизайн-решения и разрабатываю стратегии продвижения в социальных сетях.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мой подход — комплексный взгляд на задачу клиента, где каждый элемент работает 
                на общую цель: узнаваемость, вовлечённость и продажи.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground">Делюсь опытом и инсайтами</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Готов обсудить ваш проект</p>
          </div>

          <Card className="p-8 md:p-12">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Свяжитесь со мной</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">hello@example.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-medium">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Instagram" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Instagram</p>
                        <p className="font-medium">@username</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Быстрая связь</h3>
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <textarea 
                      placeholder="Сообщение" 
                      rows={4}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                    <Button className="w-full" size="lg">
                      Отправить сообщение
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Все права защищены
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
