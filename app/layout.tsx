import Link from 'next/link';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        <header className="bg-white p-5">
          <nav className="flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre-nos" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/como-ajudar" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Como Ajudar
                </Link>
              </li>
              <li>
                <Link href="/doacoes" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Doações
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/bazar" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Bazar
                </Link>
              </li>
              <li>
                <Link href="/premios" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Prêmios
                </Link>
              </li>
              <li>
                <Link href="/contatos" className="text-[#89b72d] hover:text-green-600 transition-colors duration-200">
                  Contatos
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p className="text-center p-5">© 2024 Casa da Paz. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
