import Foto1 from "./assetsPengurus/Winda.png";
import Foto2 from "./assetsPengurus/Desi.png";
import Foto3 from "./assetsPengurus/Anggria.png";
import Foto4 from "./assetsPengurus/Hery.png";
import Foto5 from "./assetsPengurus/Dahermi.png";
import Foto6 from "./assetsPengurus/Henry.png";
import Foto7 from "./assetsPengurus/Jelibseda.png";
import Foto8 from "./assetsPengurus/Zetrizal.png";

const Foto = () => {
    return (

        <>
        <div className="py-10">

            <div className="">
                <h1 className="font-bold text-xl text-center py-10">Pengurus</h1>
            </div>

            <div className="md:flex md:px-44 md:space-x-44 mx-auto md:justify-center space-y-8 md:space-y-0">
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Ketua</h1>
                    <img src={Foto1} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Winda Varesa, MSi.</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Sekretaris</h1>
                    <img src={Foto2} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Desi Ratna, SSi.</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Bendahara</h1>
                    <img src={Foto3} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Dian Anggria Sari, MSi.</h1>
                </div>
            </div>

            <div className="">
                <h1 className="text-xl font-bold text-center py-10 mt-5">Pengawas</h1>   
            </div>

            <div className="md:grid md:grid-cols-5 justify-items-center gap-x-2 px-16 space-y-8 md:space-y-0">
                
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Anggota</h1>
                    <img src={Foto4} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Hery Yusamandra, MSi.</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Anggota</h1>
                    <img src={Foto5} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Prof. Dahelmi</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Anggota</h1>
                    <img src={Foto6} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Henny Herwina, MSc.</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Anggota</h1>
                    <img src={Foto7} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Jelibseda, SSi.</h1>
                </div>
                <div className="">
                    <h1 className="text-center font-bold text-[#818181] pb-2">Anggota</h1>
                    <img src={Foto8} className="mx-auto" alt="" />
                    <h1 className="font-bold text-center">Zetrizal, SSi.</h1>
                </div>
            </div>

        </div>
        </>

    );
}

export default Foto;