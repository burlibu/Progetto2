'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDev from '../components/NavbarDev';


const FlexboxExample = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-8">
    <h2 className="text-2xl font-semibold mb-4 text-black">{title}</h2>
    <p className="mb-6 text-black">{description}</p>
    <div className="bg-gray-100 p-4 rounded-lg">
      {children}
    </div>
  </div>
);

const JustifyContentExample = ({ title, description, className }: { title: string, description: string, className: string }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
    <p className="mb-2 text-sm text-black">{description}</p>
    <div className={`flex ${className} bg-red-100 h-16 rounded-lg`}>
      <div className="w-12 h-12 bg-red-500 rounded-md"></div>
      <div className="w-12 h-12 bg-red-500 rounded-md"></div>
      <div className="w-12 h-12 bg-red-500 rounded-md"></div>
    </div>
  </div>
);

export default function FlexboxPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <NavbarDev/>
      <main className=" flex-grow bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto mt-300 pt-6">
          <h1 className="mt-200 text-3xl font-bold mb-6 text-black">Guida Tailwind CSS Flexbox</h1>
          
          <FlexboxExample 
            title="display: flex" 
            description="Crea un contenitore flex. Attributi: flex, inline-flex"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex</h3>
              <p className="mb-2 text-sm text-black">Crea un contenitore flex a livello di blocco</p>
              <div className="flex bg-blue-100 h-32 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">inline-flex</h3>
              <p className="mb-2 text-sm text-black">Crea un contenitore flex inline</p>
              <div className="inline-flex bg-blue-100 h-32 rounded-lg">
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-blue-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="flex-direction" 
            description="Definisce la direzione principale del container. Attributi: flex-row, flex-row-reverse, flex-col, flex-col-reverse"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-row</h3>
              <p className="mb-2 text-sm text-black">Dispone gli elementi in una riga (default)</p>
              <div className="flex flex-row bg-green-100 h-32 rounded-lg">
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">1</div>
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">2</div>
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">3</div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-row-reverse</h3>
              <p className="mb-2 text-sm text-black">Dispone gli elementi in una riga inversa</p>
              <div className="flex flex-row-reverse bg-green-100 h-32 rounded-lg">
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">1</div>
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">2</div>
                <div className="w-16 h-16 bg-green-500 rounded-md m-2">3</div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-col</h3>
              <p className="mb-2 text-sm text-black">Dispone gli elementi in una colonna</p>
              <div className="flex flex-col bg-green-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">1</div>
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">2</div>
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">3</div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-col-reverse</h3>
              <p className="mb-2 text-sm text-black">Dispone gli elementi in una colonna inversa</p>
              <div className="flex flex-col-reverse bg-green-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">1</div>
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">2</div>
                <div className="w-16 h-8 bg-green-500 rounded-md m-1">3</div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="justify-content" 
            description="Allinea gli elementi lungo l'asse principale. Attributi: justify-start, justify-end, justify-center, justify-between, justify-around, justify-evenly"
          >
            <JustifyContentExample 
              title="justify-start" 
              description="Allinea gli elementi all'inizio del container"
              className="justify-start"
            />
            <JustifyContentExample 
              title="justify-end" 
              description="Allinea gli elementi alla fine del container"
              className="justify-end"
            />
            <JustifyContentExample 
              title="justify-center" 
              description="Allinea gli elementi al centro del container"
              className="justify-center"
            />
            <JustifyContentExample 
              title="justify-between" 
              description="Distribuisce gli elementi con spazio uguale tra di loro"
              className="justify-between"
            />
            <JustifyContentExample 
              title="justify-around" 
              description="Distribuisce gli elementi con spazio uguale intorno a loro"
              className="justify-around"
            />
            <JustifyContentExample 
              title="justify-evenly" 
              description="Distribuisce gli elementi con spazio uguale tra e intorno a loro"
              className="justify-evenly"
            />
          </FlexboxExample>

          <FlexboxExample 
            title="align-items" 
            description="Allinea gli elementi lungo l'asse trasversale. Attributi: items-start, items-end, items-center, items-baseline, items-stretch"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">items-start</h3>
              <p className="mb-2 text-sm text-black">Allinea gli elementi all'inizio dell'asse trasversale</p>
              <div className="flex items-start bg-yellow-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-24 bg-yellow-500 rounded-md m-2"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">items-end</h3>
              <p className="mb-2 text-sm text-black">Allinea gli elementi alla fine dell'asse trasversale</p>
              <div className="flex items-end bg-yellow-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-24 bg-yellow-500 rounded-md m-2"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">items-center</h3>
              <p className="mb-2 text-sm text-black">Allinea gli elementi al centro dell'asse trasversale</p>
              <div className="flex items-center bg-yellow-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 h-24 bg-yellow-500 rounded-md m-2"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">items-baseline</h3>
              <p className="mb-2 text-sm text-black">Allinea gli elementi alla linea di base del testo</p>
              <div className="flex items-baseline bg-yellow-100 h-32 rounded-lg">
                <div className="w-16 h-8 bg-yellow-500 rounded-md m-2 pt-2">A</div>
                <div className="w-16 h-16 bg-yellow-500 rounded-md m-2 pt-4 text-2xl">A</div>
                <div className="w-16 h-24 bg-yellow-500 rounded-md m-2 pt-6 text-4xl">A</div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">items-stretch</h3>
              <p className="mb-2 text-sm text-black">Estende gli elementi per riempire il container</p>
              <div className="flex items-stretch bg-yellow-100 h-32 rounded-lg">
                <div className="w-16 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 bg-yellow-500 rounded-md m-2"></div>
                <div className="w-16 bg-yellow-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="gap" 
            description="Controlla lo spazio tra gli elementi flex. Attributi: gap-0, gap-1, gap-2, ..., gap-8, gap-10, gap-12, gap-16"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">gap-4</h3>
              <p className="mb-2 text-sm text-black">Aggiunge uno spazio di 1rem tra gli elementi</p>
              <div className="flex gap-4 bg-purple-100 p-4 rounded-lg">
                <div className="w-16 h-16 bg-purple-500 rounded-md"></div>
                <div className="w-16 h-16 bg-purple-500 rounded-md"></div>
                <div className="w-16 h-16 bg-purple-500 rounded-md"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="flex-wrap" 
            description="Controlla se gli elementi flex possono disporsi su più righe. Attributi: flex-nowrap, flex-wrap, flex-wrap-reverse"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-wrap</h3>
              <p className="mb-2 text-sm text-black">Permette agli elementi di andare a capo su più righe</p>
              <div className="flex flex-wrap bg-indigo-100 p-4 rounded-lg">
                <div className="w-24 h-24 bg-indigo-500 rounded-md m-2"></div>
                <div className="w-24 h-24 bg-indigo-500 rounded-md m-2"></div>
                <div className="w-24 h-24 bg-indigo-500 rounded-md m-2"></div>
                <div className="w-24 h-24 bg-indigo-500 rounded-md m-2"></div>
                <div className="w-24 h-24 bg-indigo-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="align-content" 
            description="Allinea le righe di un container flex quando c'è spazio extra nell'asse trasversale. Attributi: content-start, content-end, content-center, content-between, content-around, content-evenly"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">content-between</h3>
              <p className="mb-2 text-sm text-black">Distribuisce le righe con spazio uguale tra di loro</p>
              <div className="flex flex-wrap content-between bg-pink-100 h-64 p-4 rounded-lg">
                <div className="w-24 h-16 bg-pink-500 rounded-md m-2"></div>
                <div className="w-24 h-16 bg-pink-500 rounded-md m-2"></div>
                <div className="w-24 h-16 bg-pink-500 rounded-md m-2"></div>
                <div className="w-24 h-16 bg-pink-500 rounded-md m-2"></div>
                <div className="w-24 h-16 bg-pink-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="column-gap e row-gap" 
            description="Controlla lo spazio tra colonne e righe separatamente. Attributi: gap-x-{size} per column-gap, gap-y-{size} per row-gap"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">gap-x-4 gap-y-8</h3>
              <p className="mb-2 text-sm text-black">Aggiunge uno spazio orizzontale di 1rem e verticale di 2rem</p>
              <div className="flex flex-wrap gap-x-4 gap-y-8 bg-teal-100 p-4 rounded-lg">
                <div className="w-24 h-16 bg-teal-500 rounded-md"></div>
                <div className="w-24 h-16 bg-teal-500 rounded-md"></div>
                <div className="w-24 h-16 bg-teal-500 rounded-md"></div>
                <div className="w-24 h-16 bg-teal-500 rounded-md"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="flex-shrink" 
            description="Definisce la capacità di un elemento flex di ridursi se necessario. Attributi: flex-shrink-0, flex-shrink"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-shrink e flex-shrink-0</h3>
              <p className="mb-2 text-sm text-black">Il primo elemento non si riduce, gli altri sì</p>
              <div className="flex bg-orange-100 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 h-16 bg-orange-500 rounded-md m-2"></div>
                <div className="flex-shrink w-64 h-16 bg-orange-500 rounded-md m-2"></div>
                <div className="flex-shrink w-64 h-16 bg-orange-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="flex-grow" 
            description="Definisce la capacità di un elemento flex di crescere se necessario. Attributi: flex-grow-0, flex-grow"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">flex-grow</h3>
              <p className="mb-2 text-sm text-black">Il secondo elemento cresce per occupare lo spazio disponibile</p>
              <div className="flex bg-lime-100 p-4 rounded-lg">
                <div className="w-16 h-16 bg-lime-500 rounded-md m-2"></div>
                <div className="flex-grow h-16 bg-lime-500 rounded-md m-2"></div>
                <div className="w-16 h-16 bg-lime-500 rounded-md m-2"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="border e padding" 
            description="Aggiunge bordi e padding agli elementi flex. Attributi: border, border-{color}-{intensity}, p-{size}"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">border-2 border-blue-500 p-4</h3>
              <p className="mb-2 text-sm text-black">Aggiunge un bordo blu e un padding interno</p>
              <div className="flex bg-blue-100 p-4 rounded-lg">
                <div className="w-32 h-32 bg-blue-200 rounded-md m-2 border-2 border-blue-500 p-4">
                  <div className="w-full h-full bg-blue-500 rounded-md"></div>
                </div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="grid" 
            description="Crea un layout a griglia. Attributi: grid, grid-cols-{number}, gap-{size}"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">grid grid-cols-3 gap-4</h3>
              <p className="mb-2 text-sm text-black">Crea una griglia con 3 colonne e spazio tra gli elementi</p>
              <div className="grid grid-cols-3 gap-4 bg-emerald-100 p-4 rounded-lg">
                <div className="h-16 bg-emerald-500 rounded-md"></div>
                <div className="h-16 bg-emerald-500 rounded-md"></div>
                <div className="h-16 bg-emerald-500 rounded-md"></div>
                <div className="h-16 bg-emerald-500 rounded-md"></div>
                <div className="h-16 bg-emerald-500 rounded-md"></div>
                <div className="h-16 bg-emerald-500 rounded-md"></div>
              </div>
            </div>
          </FlexboxExample>

          <FlexboxExample 
            title="place-content-center" 
            description="Centra il contenuto sia orizzontalmente che verticalmente. Attributi: place-content-center"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-black">place-content-center</h3>
              <p className="mb-2 text-sm text-black">Centra il contenuto all'interno del container</p>
              <div className="grid place-content-center bg-fuchsia-100 h-64 p-4 rounded-lg">
                <div className="w-32 h-32 bg-fuchsia-500 rounded-md"></div>
              </div>
            </div>
          </FlexboxExample>

        </div>
      </main>
      <Footer />
    </div>
  );
}