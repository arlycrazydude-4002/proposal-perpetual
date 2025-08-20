import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import FloatingHearts from './FloatingHearts';
import html2canvas from 'html2canvas';
import { Heart, Download, ChevronLeft, ChevronRight } from 'lucide-react';

type ViewType = 'landing' | 'terms1' | 'terms2' | 'terms3' | 'certificate';

const VirtualMarriageApp = () => {
  const [currentView, setCurrentView] = useState<ViewType>('landing');
  const [showProposal, setShowProposal] = useState(false);
  const [partnerName, setPartnerName] = useState('Hiba');
  const [proposerName, setProposerName] = useState('Sharvesh');
  const [isRunaway, setIsRunaway] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const generateCertificateNumber = () => {
    return Array.from({length: 12}, () => 
      Math.random().toString(36).charAt(Math.floor(Math.random() * 36))
    ).join('').toUpperCase();
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleRunawayButton = () => {
    setIsRunaway(true);
    setTimeout(() => setIsRunaway(false), 1000);
  };

  const downloadCertificate = async () => {
    if (certificateRef.current) {
      const canvas = await html2canvas(certificateRef.current, {
        backgroundColor: '#f5f3f0',
        scale: 2,
        useCORS: true,
      });
      
      const link = document.createElement('a');
      link.download = `Certificate-of-Eternal-Partnership-${partnerName}-${proposerName}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const renderLanding = () => (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-soft">
      <FloatingHearts />
      <div className="text-center z-10 px-6">
        <div className="mb-8 animate-float-hearts">
          <Heart className="w-16 h-16 text-romantic mx-auto mb-4" />
        </div>
        <h1 className="font-romantic text-5xl md:text-7xl font-bold text-romantic mb-6">
          An Important Proposal
        </h1>
        <h2 className="font-romantic text-2xl md:text-3xl text-muted-foreground mb-8 italic">
          Awaits You...
        </h2>
        <p className="font-serif-body text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Something special has been prepared for you. A document of utmost importance 
          requires your attention and, perhaps, your signature.
        </p>
        <Button 
          onClick={() => setCurrentView('terms1')}
          size="lg"
          className="bg-gradient-romantic text-primary-foreground hover:opacity-90 font-romantic text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Begin the Journey 💕
        </Button>
      </div>
    </div>
  );

  const renderTerms1 = () => (
    <div className="min-h-screen py-12 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-2 border-certificate-border shadow-xl">
          <CardContent className="p-8">
            <h1 className="font-romantic text-4xl font-bold text-center text-romantic mb-2">
              Agreement of Eternal Partnership
            </h1>
            <p className="text-center text-muted-foreground mb-8 font-serif-body">
              This document outlines the terms and conditions of entering into a lifelong partnership with Sharvesh
            </p>
            
            <div className="space-y-6 font-serif-body text-lg leading-relaxed">
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 1 – Tolerance & Patience</h3>
                <p>You agree to tolerate Sharvesh's silly jokes, late replies, occasional mood swings (periods and PMSing), and weird obsessions.</p>
              </div>
              
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 2 – Shared Duties</h3>
                <p>You shall equally share snacks, blankets, and emotional burdens. Bed space disputes shall be settled peacefully or by making out intensely and tire each other out until we decide to sleep wrapped around each other, with us having the right to cuddle as a form of resolution.</p>
              </div>
              
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 3 – Emotional Exclusivity</h3>
                <p>You agree to reserve your love, affection, and late-night talks for Sharvesh only. No third party shall interfere in this arrangement (except snacks, which are exempted, but is it tho?).</p>
              </div>
              
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 4 – Travel & Adventures</h3>
                <p>You agree to join Sharvesh in random adventures, whether it be a midnight walk, a rainy trek, spontaneous trips, cafe hopping and getting lost together on purpose.</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('landing')}
                className="font-romantic"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setCurrentView('terms2')}
                className="bg-gradient-romantic text-primary-foreground font-romantic"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderTerms2 = () => (
    <div className="min-h-screen py-12 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-2 border-certificate-border shadow-xl">
          <CardContent className="p-8">
            <h1 className="font-romantic text-4xl font-bold text-center text-romantic mb-8">
              Terms & Conditions - Page 2
            </h1>
            
            <div className="space-y-6 font-serif-body text-lg leading-relaxed">
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 5 – Health & Comfort</h3>
                <p>You agree to let Sharvesh fuss over you when you are unwell — which includes but is not limited to: feeding you, nagging you to take medicines, wrapping you in blankets, and sneaking in unsolicited forehead kisses. You shall not resist being spoiled with hugs, cuddles, and overprotective care until full recovery is achieved.</p>
              </div>
              
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 6 – Arguments & Resolutions</h3>
                <p>All disagreements shall end with hugs, smiles, or dramatic "sorry" messages. Arguments shall be settled with hugs, forehead kisses, or late-night confessions. Silent treatments must not exceed 12 hours.</p>
              </div>
              
              <div className="border-l-4 border-romantic pl-6">
                <h3 className="font-romantic text-xl font-semibold text-romantic mb-2">Clause 7 – Forever & Always</h3>
                <p>By accepting these terms, you acknowledge that this agreement is permanent, binding, and irrevocable. The only exit clause is "never".</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('terms1')}
                className="font-romantic"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setCurrentView('terms3')}
                className="bg-gradient-romantic text-primary-foreground font-romantic"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderTerms3 = () => (
    <div className="min-h-screen py-12 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card border-2 border-certificate-border shadow-xl">
          <CardContent className="p-8">
            <h1 className="font-romantic text-4xl font-bold text-center text-romantic mb-8">
              Declaration of Eternal Bond
            </h1>
            
            <div className="space-y-6 font-serif-body text-lg leading-relaxed">
              <div className="bg-secondary/30 p-6 rounded-lg border border-romantic/20">
                <p className="mb-4">By accepting this agreement, you acknowledge:</p>
                <ul className="space-y-3 list-disc list-inside ml-4">
                  <li>That you choose Sharvesh as your partner, confidant, and best friend.</li>
                  <li>That you will hold his hand through adventures, hardships, and quiet nights.</li>
                  <li>That your love will be the constant force binding both hearts together.</li>
                </ul>
              </div>
              
              <div className="text-center bg-romantic/10 p-6 rounded-lg border border-romantic/30">
                <p className="font-romantic text-xl font-semibold text-romantic mb-4">
                  This agreement is permanent, binding, and irrevocable.
                </p>
                <p className="text-muted-foreground">
                  There is no escape clause. The only renewal required is love, every single day.
                </p>
              </div>
              
              <div className="text-center pt-4">
                <p className="font-romantic text-lg font-semibold text-foreground">
                  ⚖️ Final Declaration
                </p>
                <p className="text-muted-foreground">
                  By clicking "I Agree", you officially bind yourself into this forever partnership — not by law, but by love.
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('terms2')}
                className="font-romantic"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button 
                onClick={() => setShowProposal(true)}
                className="bg-gradient-romantic text-primary-foreground font-romantic text-xl px-8 py-3"
              >
                I Agree 💖
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCertificate = () => (
    <div className="min-h-screen py-12 px-6 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-4">
          <h1 className="font-romantic text-4xl font-bold text-center text-romantic">
            Create Your Certificate
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div>
              <label className="block text-sm font-medium mb-2">Partner's Name</label>
              <Input
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                className="w-48 font-serif-body shadow-lg border-2 border-certificate-border/30 focus:border-certificate-border focus:shadow-xl bg-white/90"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <Input
                value={proposerName}
                onChange={(e) => setProposerName(e.target.value)}
                className="w-48 font-serif-body shadow-lg border-2 border-certificate-border/30 focus:border-certificate-border focus:shadow-xl bg-white/90"
                placeholder="Enter name"
              />
            </div>
          </div>
        </div>

        <div 
          ref={certificateRef}
          className="bg-certificate border-8 border-certificate-border shadow-2xl p-16 mx-auto max-w-5xl relative"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af87' fill-opacity='0.08'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v30h30z'/%3E%3C/g%3E%3C/svg%3E")`,
            borderImage: 'linear-gradient(45deg, #d4af87, #8b7355, #d4af87) 8',
          }}
        >
          {/* Vintage corner decorations */}
          <div className="absolute top-2 left-2 text-certificate-border text-4xl opacity-60">
            <div className="relative">
              ❦
              <div className="absolute -top-1 -left-1 text-certificate-border/30 text-3xl">✧</div>
            </div>
          </div>
          <div className="absolute top-2 right-2 text-certificate-border text-4xl opacity-60">
            <div className="relative">
              ❦
              <div className="absolute -top-1 -right-1 text-certificate-border/30 text-3xl">✧</div>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 text-certificate-border text-4xl opacity-60">
            <div className="relative">
              ❦
              <div className="absolute -bottom-1 -left-1 text-certificate-border/30 text-3xl">✧</div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 text-certificate-border text-4xl opacity-60">
            <div className="relative">
              ❦
              <div className="absolute -bottom-1 -right-1 text-certificate-border/30 text-3xl">✧</div>
            </div>
          </div>
          
          {/* Vintage border accent */}
          <div className="absolute inset-4 border-2 border-certificate-border/20 pointer-events-none"></div>
          <div className="absolute inset-6 border border-certificate-border/10 pointer-events-none"></div>
          
          <div className="text-center space-y-6">
            <h1 className="font-romantic text-5xl font-bold text-certificate-border mb-2">
              CERTIFICATE
            </h1>
            <h2 className="font-romantic text-2xl text-certificate-border">
              of Eternal Partnership
            </h2>
            
            <div className="text-certificate-border text-sm tracking-widest">
              № {generateCertificateNumber()}
            </div>
            
            <div className="border-t border-b border-certificate-border py-6 my-8">
              <p className="font-serif-body text-lg text-certificate-border italic mb-4">
                This certifies that
              </p>
              
              <div className="font-romantic text-4xl font-bold text-certificate-border mb-2">
                {partnerName}
              </div>
              <div className="font-serif-body text-lg text-certificate-border mb-4">
                and
              </div>
              <div className="font-romantic text-4xl font-bold text-certificate-border">
                {proposerName}
              </div>
              
              <p className="font-serif-body text-lg text-certificate-border mt-6 mb-2">
                were united in eternal love and partnership on
              </p>
              <div className="font-romantic text-xl font-semibold text-certificate-border">
                {currentDate}
              </div>
            </div>
            
            <div className="space-y-2 text-certificate-border font-serif-body">
              <p className="italic">Certified with love, laughter, and endless cuddles.</p>
              <p className="italic">Forever bound, not by law, but by heart.</p>
            </div>
            
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-16 rounded-full border-2 border-certificate-border flex items-center justify-center">
                <Heart className="w-8 h-8 text-romantic" />
              </div>
            </div>
            
            <div className="text-sm text-certificate-border mt-6 border-t border-certificate-border pt-4">
              Valid for Eternity • Certified by Love Inc.
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button 
            onClick={downloadCertificate}
            className="bg-gradient-romantic text-primary-foreground font-romantic text-lg px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Certificate
          </Button>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'landing': return renderLanding();
      case 'terms1': return renderTerms1();
      case 'terms2': return renderTerms2();
      case 'terms3': return renderTerms3();
      case 'certificate': return renderCertificate();
      default: return renderLanding();
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentView()}
      
      <Dialog open={showProposal} onOpenChange={setShowProposal}>
        <DialogContent className="max-w-md bg-card border-2 border-romantic">
          <DialogTitle className="sr-only">Marriage Proposal</DialogTitle>
          <div className="text-center p-6">
            <div className="mb-6">
              <Heart className="w-16 h-16 text-romantic mx-auto mb-4 animate-float-hearts" />
            </div>
            
            <h2 className="font-romantic text-2xl font-bold text-romantic mb-4">
              The Final Question 💕
            </h2>
            
            <p className="font-serif-body text-lg text-foreground mb-8 leading-relaxed">
              After going through all conditions, knowing the risks of endless love, 
              will you accept to be Sharvesh's forever partner, his hair ruffler, his safe place, and his one and only?
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={() => {
                  setShowProposal(false);
                  setCurrentView('certificate');
                }}
                className="w-full bg-gradient-romantic text-primary-foreground font-romantic text-lg py-3"
              >
                I Do 💍
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleRunawayButton}
                className={`w-full font-romantic ${isRunaway ? 'animate-runaway' : ''}`}
                disabled={isRunaway}
              >
                {isRunaway ? "You wish 😏 now click I Do" : "Hmm..."}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VirtualMarriageApp;