import Link from 'next/link';

export const Footer = () => {
    return (
        <section>
            <div className="footer">
                <i class="far fa-copyright"></i> 2020 
                <a href='https://github.com/MultiformMusic' target="_blank" title="Github">
                    <i class="fab fa-github fa-2x ml-4"></i>
                </a>
                <a href='https://soundcloud.com/multiform_bdx' target="_blank" title="Soundcloud">
                    <i class="fab fa-soundcloud fa-2x ml-2"></i>
                </a>
                <a href='https://www.youtube.com/user/Enden33/videos' target="_blank" title="Youtube">
                    <i class="fab fa-youtube fa-2x ml-2"></i>
                </a>
            </div>
        </section>
    )
}
