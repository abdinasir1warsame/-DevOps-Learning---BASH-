import {
  Terminal,
  Zap,
  Trophy,
  Target,
  Shield,
  Code2,
  Github,
} from 'lucide-react';
import heroImage from './assets/image.png';

// Inline Button Component
const Button = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    neon: 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.8)] transition-all duration-300',
    terminal:
      'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] transition-all duration-300',
    terminalSecondary:
      'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10 shadow-[0_0_20px_hsl(var(--secondary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--secondary)/0.6)] transition-all duration-300',
  };

  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    lg: 'h-11 rounded-md px-8',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

// Inline Card Components
const Card = ({ className = '', children, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className = '', children }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ className = '', children }) => {
  return (
    <h3
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ className = '', children }) => {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
  );
};

const CardContent = ({ className = '', children }) => {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
};

const App = () => {
  return (
    <div className="min-h-screen bg-background terminal-scanline">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-0" />

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <Terminal className="w-16 h-16 text-primary animate-glow-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-glow-primary">
            BASH BATTLE ARENA
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono">
            $ <span className="text-terminal-green">level_up</span> --skills=
            <span className="text-terminal-cyan">bash</span> --mode=
            <span className="text-terminal-blue">epic</span>
          </p>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Master the command line through gamified challenges. Battle bosses,
            earn achievements, and become a Bash scripting legend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="text-lg font-display">
              <Zap className="mr-2" />
              Start Battling Now
            </Button>
            <Button
              variant="terminal"
              size="lg"
              className="text-lg font-display"
            >
              <Code2 className="mr-2" />
              View Challenges
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <span className="text-terminal-green">●</span>
              <span>100+ Levels</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-blue">●</span>
              <span>Boss Battles</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-terminal-cyan">●</span>
              <span>Real-time Hints</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-glow-secondary">
            Level Up Your Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 font-mono">
            {'>'} Learn Bash scripting through interactive gameplay
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:glow-box group">
              <CardHeader>
                <div className="mb-4">
                  <Target className="w-12 h-12 text-primary group-hover:text-glow-primary transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Level-Based Challenges
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Progress through 100+ carefully crafted levels, from beginner
                  to expert
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-green">
                $ cat levels.txt
                <br />
                ▸ Basics: File navigation
                <br />
                ▸ Intermediate: Pipes & filters
                <br />▸ Advanced: System automation
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all hover:glow-box-secondary group">
              <CardHeader>
                <div className="mb-4">
                  <Shield className="w-12 h-12 text-secondary group-hover:text-glow-secondary transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Epic Boss Battles
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Face challenging boss levels that test everything you&apos;ve
                  learned
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-blue">
                $ ./boss_battle.sh
                <br />
                ⚔️ Regex Dragon
                <br />
                🛡️ The Permission Guardian
                <br />
                👑 Cron King
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all hover:glow-box group">
              <CardHeader>
                <div className="mb-4">
                  <Zap className="w-12 h-12 text-accent group-hover:text-glow-accent transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Smart Hints System
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Get contextual hints when you&apos;re stuck, just like a real
                  coding mentor
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-cyan">
                $ hint --show
                <br />
                💡 Try using grep -r
                <br />
                💡 Remember the | operator
                <br />
                💡 Check man pages with &apos;man&apos;
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:glow-box group">
              <CardHeader>
                <div className="mb-4">
                  <Trophy className="w-12 h-12 text-primary group-hover:text-glow-primary transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Achievement System
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Unlock badges and track your progress as you master each skill
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-yellow">
                $ achievements --list
                <br />
                🏆 Pipe Master
                <br />
                🏆 Regex Warrior
                <br />
                🏆 Script Ninja
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-secondary/20 hover:border-secondary/50 transition-all hover:glow-box-secondary group">
              <CardHeader>
                <div className="mb-4">
                  <Terminal className="w-12 h-12 text-secondary group-hover:text-glow-secondary transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Real Terminal Experience
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Practice in an authentic terminal environment with real
                  commands
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-green">
                $ echo &quot;Learn by doing&quot;
                <br />
                Learn by doing
                <br />
                $ pwd
                <br />
                /home/warrior/arena
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-accent/20 hover:border-accent/50 transition-all hover:glow-box group">
              <CardHeader>
                <div className="mb-4">
                  <Code2 className="w-12 h-12 text-accent group-hover:text-glow-accent transition-all" />
                </div>
                <CardTitle className="font-display text-xl">
                  Interactive Learning
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Instant feedback on your commands with explanations of what
                  went wrong
                </CardDescription>
              </CardHeader>
              <CardContent className="font-mono text-sm text-terminal-red">
                $ ls -invalid
                <br />
                ❌ Error: unknown option
                <br />
                💭 Try: ls -la for all files
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Level Preview Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-glow-primary">
            Example Challenge
          </h2>

          <Card className="bg-card border-primary/30 glow-box">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-display text-2xl">
                  Level 5: File Detective
                </CardTitle>
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-terminal-yellow">★★★☆☆</span>
                  <span className="text-muted-foreground">
                    Difficulty: Medium
                  </span>
                </div>
              </div>
              <CardDescription className="font-mono">
                Use your Bash skills to find hidden files in the system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-background/50 p-4 rounded border border-primary/20 font-mono text-sm">
                <p className="text-terminal-cyan mb-2">Mission Briefing:</p>
                <p className="text-foreground/80 mb-4">
                  A critical configuration file named &quot;secret.conf&quot; is
                  hidden somewhere in the /var/logs directory. Find it and
                  display its contents.
                </p>

                <div className="bg-background p-3 rounded border border-primary/10">
                  <p className="text-terminal-green">
                    ${' '}
                    <span className="terminal-cursor">
                      find /var/logs -name &quot;secret.conf&quot; -exec cat{' '}
                      {'{}'} \;
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="neon" className="font-display">
                  <Zap className="mr-2" />
                  Try This Challenge
                </Button>
                <Button variant="terminal" className="font-display">
                  Show Hint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-glow-secondary">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-mono">
            {'>'} Join thousands of developers mastering Bash through epic
            battles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="lg" className="text-lg font-display">
              <Terminal className="mr-2" />
              Enter the Arena
            </Button>
            <Button
              variant="terminalSecondary"
              size="lg"
              className="text-lg font-display"
            >
              <Github className="mr-2" />
              View on GitHub
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground font-mono">
            Free to play • No credit card required • Open source
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 font-mono text-sm">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-foreground">Bash Battle Arena</span>
              <span className="text-muted-foreground">by CoderCo</span>
            </div>

            <div className="flex items-center gap-6 text-sm font-mono">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Discord
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-muted-foreground font-mono">
            <p>$ echo &quot;Made with 💚 for command-line enthusiasts&quot;</p>
            <p className="mt-2">© 2025 CoderCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
