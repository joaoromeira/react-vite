import 'reflect-metadata';

export const App = (): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        height: '100vh',
      }}
    >
      <span style={{ color: '#ffffff', fontSize: '4rem', fontWeight: 'bold' }}>
        React Vite
      </span>
    </div>
  );
};
