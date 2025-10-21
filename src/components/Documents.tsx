import { Download, FileText, CheckCircle2, QrCode, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Documents = () => {
  const { t } = useLanguage();

  const documents = [
    {
      title: 'Curriculum Vitae',
      icon: FileText,
      size: '245 KB',
      format: 'PDF',
      verified: true,
      description: 'CV complet avec expériences et compétences',
      downloadUrl: '#',
    },
    {
      title: 'Lettre de Motivation',
      icon: FileText,
      size: '180 KB',
      format: 'PDF',
      verified: true,
      description: 'Lettre personnalisée pour votre entreprise',
      downloadUrl: '#',
    },
    {
      title: 'Relevé de Notes',
      icon: Award,
      size: '320 KB',
      format: 'PDF',
      verified: true,
      description: 'Bulletins universitaires officiels',
      downloadUrl: '#',
    },
    {
      title: 'Certificat Google',
      icon: Award,
      size: '150 KB',
      format: 'PDF',
      verified: true,
      description: 'Certification Digital Marketing',
      downloadUrl: '#',
    },
    {
      title: 'Recommandation Professionnelle',
      icon: FileText,
      size: '210 KB',
      format: 'PDF',
      verified: true,
      description: 'Lettre de recommandation employeur',
      downloadUrl: '#',
    },
    {
      title: 'Portfolio Projets',
      icon: FileText,
      size: '1.2 MB',
      format: 'PDF',
      verified: true,
      description: 'Présentation détaillée de mes projets',
      downloadUrl: '#',
    },
  ];

  return (
    <section id="documents" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-primary icon-pulse" />
            <h2 className="section-title">{t('documentsTitle')}</h2>
          </div>
          <p className="section-subtitle">{t('documentsSubtitle')}</p>

          {/* QR Code Section */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="portecv-card bg-gradient-to-br from-primary/10 to-success/10 border-2 border-primary/30 text-center">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-white rounded-lg p-2 flex items-center justify-center">
                  <QrCode className="w-full h-full text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Scannez pour télécharger tous mes documents
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Accédez instantanément à mon CV, certifications et lettres de recommandation
                  </p>
                  <button className="btn-primary flex items-center gap-2 mx-auto md:mx-0">
                    <Download className="w-5 h-5" />
                    Télécharger tout (2.3 MB)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <div key={index} className="portecv-card group hover:border-primary/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary icon-hover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">{doc.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">
                          {doc.format}
                        </span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>

                  <div className="flex items-center justify-between">
                    {doc.verified && (
                      <div className="flex items-center gap-1 text-success text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs">Vérifié</span>
                      </div>
                    )}
                    <button className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors icon-hover">
                      <Download className="w-4 h-4" />
                      Télécharger
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="max-w-2xl mx-auto mt-12 portecv-card bg-gradient-to-r from-primary/10 to-success/10 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Besoin d'informations supplémentaires ?
            </h3>
            <p className="text-muted-foreground mb-6">
              N'hésitez pas à me contacter pour obtenir des documents complémentaires ou poser vos questions
            </p>
            <button className="btn-success flex items-center gap-2 mx-auto">
              <Download className="w-5 h-5" />
              Demander un document personnalisé
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
