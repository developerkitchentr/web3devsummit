import PaperCommon from "../common/paper.common";
import Image from "next/image";
import Link from "next/link";

const classNames = {
    root: 'image-list-epic mb-6',
    head: 'color-white text-3xl text-center mb-5 font-normal',
    outer: 'text-center',
    image: 'image-list-image'
}

const ImageListEpic = ({ head, image_list }: Props) => {
    return (
        <div className={ classNames.root }>
            <h2 className={ classNames.head }>{ head }</h2>
            <div className={ classNames.outer }>
                { image_list.map((image, index) => (
                    image.link ?
                        <Link href={ image.link } key={ `${ head.trim() }-0${ index }` }>
                            <PaperCommon variant="inline-block m-3">
                                <Image
                                    className={ classNames.image }
                                    src={ image.image_url }
                                    alt=""
                                    width={ 200 }
                                    height={ 60 }
                                />
                            </PaperCommon>
                        </Link>
                        :
                        <PaperCommon variant="inline-block m-3" key={ `${ head.trim() }-0${ index }`}>
                            <Image
                                className={ classNames.image }
                                src={ image.image_url }
                                alt=""
                                width={ 200 }
                                height={ 60 }
                            />
                        </PaperCommon>
                )) }
            </div>
        </div>
    );
};

interface Props {
    head: string;
    image_list: ImageListEpic_[]
}

interface ImageListEpic_ {
    image_url: string;
    link: string | null
}

export default ImageListEpic;