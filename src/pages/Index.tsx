import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, TreePine, Wind, HeartPulse, Recycle, MapPin, Phone, Mail } from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const impactos = [
    {
      icon: Droplets,
      titulo: "Contaminação da água",
      descricao: "Chorume e produtos químicos infiltram-se no lençol freático e rios, prejudicando a vida aquática e comprometendo a água potável."
    },
    {
      icon: TreePine,
      titulo: "Poluição do solo",
      descricao: "Metais pesados e substâncias tóxicas comprometem a fertilidade do solo e afetam ecossistemas e agricultura."
    },
    {
      icon: Wind,
      titulo: "Poluição do ar",
      descricao: "Decomposição em lixões libera metano (25x mais potente que CO₂) e queima de lixo gera fumaça prejudicial à saúde."
    },
    {
      icon: HeartPulse,
      titulo: "Problemas de saúde",
      descricao: "Acúmulo de lixo cria criadouros de vetores como o Aedes aegypti (dengue, zika, chikungunya)."
    }
  ];

  const orientacoes = [
    {
      titulo: "Lave e seque",
      descricao: "Remova restos de comida de embalagens plásticas, latas e caixas de leite. Isso evita mau cheiro e facilita a reciclagem."
    },
    {
      titulo: "Desmonte",
      descricao: "Achate caixas de papelão e PETs para ganhar espaço e facilitar transporte."
    },
    {
      titulo: "Vidros com cuidado",
      descricao: "Enrole vidros quebrados em jornal ou coloque em caixas. Retire tampas e lave vidros inteiros antes de descartar."
    },
    {
      titulo: "Separação básica",
      descricao: "Resíduos secos: plástico, vidro, metal e papel. Resíduos orgânicos: cascas, restos de alimentos e podas."
    }
  ];

  const pontosColeta = [
    {
      nome: "Sede Emlur",
      endereco: "Av. Minas Gerais, 177 — Bairro dos Estados",
      tipos: "Recicláveis & Eletrônicos"
    },
    {
      nome: "Núcleo III — Jd Oceania",
      endereco: "Av. Severino Nicolau de Melo, S/N",
      tipos: "Recicláveis"
    },
    {
      nome: "Núcleo V — Manaíra",
      endereco: "Av. Gov. Flávio Ribeiro Coutinho, S/N",
      tipos: "Recicláveis"
    },
    {
      nome: "Núcleo IV — Cidade Universitária",
      endereco: "Rua Manoel Roberto do Nascimento, S/N",
      tipos: "Recicláveis"
    },
    {
      nome: "Centro-Dia (Em frente ao Parque Arruda Câmara - Bica)",
      endereco: "Local de recolhimento de eletrônicos e recicláveis",
      tipos: "Eletrônicos"
    },
    {
      nome: "Emlur – Núcleo Jaguaribe",
      endereco: "Rua Floriano Peixoto, s/n, Jaguaribe",
      tipos: "Eletrônicos"
    },
    {
      nome: "TRE-PB (Edifício Sede)",
      endereco: "Av. Princesa Isabel, nº 204, Tambiá",
      tipos: "Eletrônicos"
    }
  ];

  const cincoRs = [
    { termo: "Repensar", descricao: "pense antes de consumir" },
    { termo: "Reduzir", descricao: "evite desperdícios" },
    { termo: "Reutilizar", descricao: "dê novo uso aos materiais" },
    { termo: "Reciclar", descricao: "separe e envie para coleta seletiva" },
    { termo: "Recusar", descricao: "diga não ao que gera poluição" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-primary text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Recycle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">Descarte Correto — João Pessoa</h1>
              <p className="text-lg md:text-xl mt-2 text-white/90">Guia prático de separação, PEVs e coleta</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <Button 
              onClick={() => scrollToSection('como-descartar')} 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Como descartar
            </Button>
            <Button 
              onClick={() => scrollToSection('pontos-coleta')} 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold backdrop-blur-sm"
            >
              Pontos de Coleta
            </Button>
            <Button 
              onClick={() => scrollToSection('contato')} 
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-semibold backdrop-blur-sm"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </header>

      {/* Alert Section */}
      <section className="py-12 px-4 bg-warning/10">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-card rounded-2xl p-8 shadow-medium border-l-4 border-warning">
            <Badge className="bg-warning text-warning-foreground mb-4">Atenção: descarte correto</Badge>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Proteja a água, o solo e a saúde da nossa cidade</h2>
            <p className="text-lg text-muted-foreground">
              O descarte inadequado de lixo provoca contaminação de água, poluição do solo e do ar e cria criadouros de doenças. 
              Em 2024, mais de <span className="font-bold text-foreground">360 toneladas</span> de lixo eletrônico foram recolhidas 
              em João Pessoa — um sinal de que ações e informação funcionam.
            </p>
          </div>
        </div>
      </section>

      {/* Impactos Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Por que o descarte correto importa?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {impactos.map((impacto, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-medium">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <impacto.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{impacto.titulo}</CardTitle>
                      <CardDescription className="mt-2 text-base">{impacto.descricao}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Orientações Section */}
      <section id="como-descartar" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Orientações de descarte — passo a passo</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Siga estas orientações simples para garantir que seus resíduos sejam destinados corretamente
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {orientacoes.map((orientacao, idx) => (
              <Card key={idx} className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{orientacao.titulo}</CardTitle>
                  <CardDescription className="text-base">{orientacao.descricao}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-destructive/10 border-destructive/30">
            <CardHeader>
              <CardTitle className="text-xl">Materiais não recicláveis (coleta comum)</CardTitle>
              <CardDescription className="text-base">
                Papel higiênico, guardanapos sujos, adesivos, etiquetas, papel carbono, clipes, grampos, 
                esponjas de aço, absorventes, fraldas e resíduos orgânicos muito sujos.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Itens Especiais Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Itens especiais — descarte correto</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-info/50 hover:border-info transition-all duration-300">
              <CardHeader>
                <CardTitle>Lixo Eletrônico</CardTitle>
                <CardDescription className="text-base">
                  Computadores, celulares, TVs, baterias e lâmpadas não devem ir ao lixo comum. 
                  Leve aos pontos específicos (veja PEVs abaixo).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-info/50 hover:border-info transition-all duration-300">
              <CardHeader>
                <CardTitle>Óleo de cozinha usado</CardTitle>
                <CardDescription className="text-base">
                  Armazene em garrafas PET e entregue em pontos de coleta (por exemplo: Sede Emlur).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-info/50 hover:border-info transition-all duration-300">
              <CardHeader>
                <CardTitle>Medicamentos vencidos</CardTitle>
                <CardDescription className="text-base">
                  Devem ser devolvidos em qualquer farmácia ou drogaria (obrigatório por lei).
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-info/50 hover:border-info transition-all duration-300">
              <CardHeader>
                <CardTitle>Tampas plásticas</CardTitle>
                <CardDescription className="text-base">
                  Participe de iniciativas como o projeto Tampa Solidária — pontos de entrega em parceria com Sudema.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pontos de Coleta Section */}
      <section id="pontos-coleta" className="py-16 px-4 bg-gradient-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Pontos de entrega (PEVs) — destaques</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Leve seus resíduos recicláveis e eletrônicos a estes locais
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pontosColeta.map((ponto, idx) => (
              <Card key={idx} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <CardTitle className="text-lg mb-2">{ponto.nome}</CardTitle>
                      <CardDescription className="text-base mb-3">{ponto.endereco}</CardDescription>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                        {ponto.tipos}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-info/10 border-info/30">
            <CardHeader>
              <CardTitle>Coleta Domiciliar</CardTitle>
              <CardDescription className="text-base">
                A Emlur realiza a coleta porta a porta em dias e horários específicos — bairros atendidos incluem 
                Mangabeira, Jardim Oceania, Bessa, Manaíra e outros. Verifique o cronograma no site oficial da Emlur 
                para saber o dia e horário do seu bairro.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 5 R's Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Os 5 R's da Sustentabilidade</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Pequenas ações no dia a dia geram grandes mudanças: leve sacolas reutilizáveis, 
            recuse descartáveis desnecessários e separe seu lixo.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {cincoRs.map((r, idx) => (
              <Card key={idx} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 min-w-[200px]">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-primary">{r.termo}</CardTitle>
                  <CardDescription className="text-sm">{r.descricao}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contato & Recursos</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Para cronogramas, dúvidas e ações: procure a Emlur ou a Sudema
          </p>
          
          <Card className="shadow-large">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Emlur - Autarquia de Limpeza Urbana</p>
                    <p className="text-muted-foreground">Consulte o site oficial para horários atualizados</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold">Sudema - Projeto Tampa Solidária</p>
                    <p className="text-muted-foreground">Ponto oficial de coleta de tampas plásticas</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Dica:</strong> consulte o site oficial da Emlur para 
                  confirmar endereços e horários atualizados. Informe vizinhos e escolas sobre PEVs. 
                  Participe de campanhas locais como Tampa Solidária.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm opacity-80">
            © 2025 Descarte Correto João Pessoa - Guia informativo para conscientização ambiental
          </p>
          <p className="text-xs opacity-60 mt-2">
            Baseado em dados da Emlur, Sudema e legislação municipal de João Pessoa
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
