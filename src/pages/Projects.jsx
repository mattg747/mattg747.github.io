export default function Projects() {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">RISC-V Processor on FPGA</h3>
            <p>3-stage pipelined CPU with hazard control and optimized FOM.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">Spot Robot Controller</h3>
            <p>Python interface for real-time Spot dance movements and pose control.</p>
          </li>
        </ul>
      </div>
    );
  }