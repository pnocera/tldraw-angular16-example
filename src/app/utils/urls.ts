export type AssetUrl = string | { src: string };
export type AssetUrlOptions = {
  baseUrl?: string;
};
// | ((assetUrl: string) => string);

function formatAssetUrl(
  assetUrl: AssetUrl,
  format: AssetUrlOptions = {}
): string {
  const assetUrlString = typeof assetUrl === 'string' ? assetUrl : assetUrl.src;

  // console.log('assetUrlString', assetUrlString);

  // if (typeof format === 'function') return format(assetUrlString);

  const { baseUrl = '' } = format;

  if (assetUrlString.startsWith('data:')) return assetUrlString;
  if (assetUrlString.match(/^https?:\/\//)) return assetUrlString;
  if (assetUrlString.match(/^http?:\/\//)) return assetUrlString;

  return `${baseUrl.replace(/\/$/, '')}/${assetUrlString.replace(
    /^\.?\//,
    ''
  )}`;
}

export class Utils {
  /**
   * @param {AssetUrlOptions} [opts]
   * @public
   */
  public static getAssetUrlsByMetaUrl(opts: AssetUrlOptions) {
    return {
      fonts: {
        monospace: formatAssetUrl(
          new URL('./assets/fonts/IBMPlexMono-Medium.woff2', opts.baseUrl).href,
          opts
        ),
        sansSerif: formatAssetUrl(
          new URL('./assets/fonts/IBMPlexSans-Medium.woff2', opts.baseUrl).href,
          opts
        ),
        serif: formatAssetUrl(
          new URL('./assets/fonts/IBMPlexSerif-Medium.woff2', opts.baseUrl)
            .href,
          opts
        ),
        draw: formatAssetUrl(
          new URL(
            './assets/fonts/Shantell_Sans-Normal-SemiBold.woff2',
            opts.baseUrl
          ).href,
          opts
        ),
      },
      icons: {
        'align-bottom-center': formatAssetUrl(
          new URL('./assets/icons/icon/align-bottom-center.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-bottom-left': formatAssetUrl(
          new URL('./assets/icons/icon/align-bottom-left.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-bottom-right': formatAssetUrl(
          new URL('./assets/icons/icon/align-bottom-right.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-bottom': formatAssetUrl(
          new URL('./assets/icons/icon/align-bottom.svg', opts.baseUrl).href,
          opts
        ),
        'align-center-center': formatAssetUrl(
          new URL('./assets/icons/icon/align-center-center.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-center-horizontal': formatAssetUrl(
          new URL(
            './assets/icons/icon/align-center-horizontal.svg',
            opts.baseUrl
          ).href,
          opts
        ),
        'align-center-left': formatAssetUrl(
          new URL('./assets/icons/icon/align-center-left.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-center-right': formatAssetUrl(
          new URL('./assets/icons/icon/align-center-right.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-center-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/align-center-vertical.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-left': formatAssetUrl(
          new URL('./assets/icons/icon/align-left.svg', opts.baseUrl).href,
          opts
        ),
        'align-right': formatAssetUrl(
          new URL('./assets/icons/icon/align-right.svg', opts.baseUrl).href,
          opts
        ),
        'align-top-center': formatAssetUrl(
          new URL('./assets/icons/icon/align-top-center.svg', opts.baseUrl)
            .href,
          opts
        ),
        'align-top-left': formatAssetUrl(
          new URL('./assets/icons/icon/align-top-left.svg', opts.baseUrl).href,
          opts
        ),
        'align-top-right': formatAssetUrl(
          new URL('./assets/icons/icon/align-top-right.svg', opts.baseUrl).href,
          opts
        ),
        'align-top': formatAssetUrl(
          new URL('./assets/icons/icon/align-top.svg', opts.baseUrl).href,
          opts
        ),
        'arrow-left': formatAssetUrl(
          new URL('./assets/icons/icon/arrow-left.svg', opts.baseUrl).href,
          opts
        ),
        'arrowhead-arrow': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-arrow.svg', opts.baseUrl).href,
          opts
        ),
        'arrowhead-bar': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-bar.svg', opts.baseUrl).href,
          opts
        ),
        'arrowhead-diamond': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-diamond.svg', opts.baseUrl)
            .href,
          opts
        ),
        'arrowhead-dot': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-dot.svg', opts.baseUrl).href,
          opts
        ),
        'arrowhead-none': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-none.svg', opts.baseUrl).href,
          opts
        ),
        'arrowhead-square': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-square.svg', opts.baseUrl)
            .href,
          opts
        ),
        'arrowhead-triangle-inverted': formatAssetUrl(
          new URL(
            './assets/icons/icon/arrowhead-triangle-inverted.svg',
            opts.baseUrl
          ).href,
          opts
        ),
        'arrowhead-triangle': formatAssetUrl(
          new URL('./assets/icons/icon/arrowhead-triangle.svg', opts.baseUrl)
            .href,
          opts
        ),
        'aspect-ratio': formatAssetUrl(
          new URL('./assets/icons/icon/aspect-ratio.svg', opts.baseUrl).href,
          opts
        ),
        avatar: formatAssetUrl(
          new URL('./assets/icons/icon/avatar.svg', opts.baseUrl).href,
          opts
        ),
        blob: formatAssetUrl(
          new URL('./assets/icons/icon/blob.svg', opts.baseUrl).href,
          opts
        ),
        'bring-forward': formatAssetUrl(
          new URL('./assets/icons/icon/bring-forward.svg', opts.baseUrl).href,
          opts
        ),
        'bring-to-front': formatAssetUrl(
          new URL('./assets/icons/icon/bring-to-front.svg', opts.baseUrl).href,
          opts
        ),
        check: formatAssetUrl(
          new URL('./assets/icons/icon/check.svg', opts.baseUrl).href,
          opts
        ),
        'checkbox-checked': formatAssetUrl(
          new URL('./assets/icons/icon/checkbox-checked.svg', opts.baseUrl)
            .href,
          opts
        ),
        'checkbox-empty': formatAssetUrl(
          new URL('./assets/icons/icon/checkbox-empty.svg', opts.baseUrl).href,
          opts
        ),
        'chevron-down': formatAssetUrl(
          new URL('./assets/icons/icon/chevron-down.svg', opts.baseUrl).href,
          opts
        ),
        'chevron-left': formatAssetUrl(
          new URL('./assets/icons/icon/chevron-left.svg', opts.baseUrl).href,
          opts
        ),
        'chevron-right': formatAssetUrl(
          new URL('./assets/icons/icon/chevron-right.svg', opts.baseUrl).href,
          opts
        ),
        'chevron-up': formatAssetUrl(
          new URL('./assets/icons/icon/chevron-up.svg', opts.baseUrl).href,
          opts
        ),
        'chevrons-ne': formatAssetUrl(
          new URL('./assets/icons/icon/chevrons-ne.svg', opts.baseUrl).href,
          opts
        ),
        'chevrons-sw': formatAssetUrl(
          new URL('./assets/icons/icon/chevrons-sw.svg', opts.baseUrl).href,
          opts
        ),
        'clipboard-copied': formatAssetUrl(
          new URL('./assets/icons/icon/clipboard-copied.svg', opts.baseUrl)
            .href,
          opts
        ),
        'clipboard-copy': formatAssetUrl(
          new URL('./assets/icons/icon/clipboard-copy.svg', opts.baseUrl).href,
          opts
        ),
        code: formatAssetUrl(
          new URL('./assets/icons/icon/code.svg', opts.baseUrl).href,
          opts
        ),
        collab: formatAssetUrl(
          new URL('./assets/icons/icon/collab.svg', opts.baseUrl).href,
          opts
        ),
        color: formatAssetUrl(
          new URL('./assets/icons/icon/color.svg', opts.baseUrl).href,
          opts
        ),
        comment: formatAssetUrl(
          new URL('./assets/icons/icon/comment.svg', opts.baseUrl).href,
          opts
        ),
        'cross-2': formatAssetUrl(
          new URL('./assets/icons/icon/cross-2.svg', opts.baseUrl).href,
          opts
        ),
        cross: formatAssetUrl(
          new URL('./assets/icons/icon/cross.svg', opts.baseUrl).href,
          opts
        ),
        'dash-dashed': formatAssetUrl(
          new URL('./assets/icons/icon/dash-dashed.svg', opts.baseUrl).href,
          opts
        ),
        'dash-dotted': formatAssetUrl(
          new URL('./assets/icons/icon/dash-dotted.svg', opts.baseUrl).href,
          opts
        ),
        'dash-draw': formatAssetUrl(
          new URL('./assets/icons/icon/dash-draw.svg', opts.baseUrl).href,
          opts
        ),
        'dash-solid': formatAssetUrl(
          new URL('./assets/icons/icon/dash-solid.svg', opts.baseUrl).href,
          opts
        ),
        discord: formatAssetUrl(
          new URL('./assets/icons/icon/discord.svg', opts.baseUrl).href,
          opts
        ),
        'distribute-horizontal': formatAssetUrl(
          new URL('./assets/icons/icon/distribute-horizontal.svg', opts.baseUrl)
            .href,
          opts
        ),
        'distribute-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/distribute-vertical.svg', opts.baseUrl)
            .href,
          opts
        ),
        dot: formatAssetUrl(
          new URL('./assets/icons/icon/dot.svg', opts.baseUrl).href,
          opts
        ),
        'dots-horizontal': formatAssetUrl(
          new URL('./assets/icons/icon/dots-horizontal.svg', opts.baseUrl).href,
          opts
        ),
        'dots-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/dots-vertical.svg', opts.baseUrl).href,
          opts
        ),
        'drag-handle-dots': formatAssetUrl(
          new URL('./assets/icons/icon/drag-handle-dots.svg', opts.baseUrl)
            .href,
          opts
        ),
        duplicate: formatAssetUrl(
          new URL('./assets/icons/icon/duplicate.svg', opts.baseUrl).href,
          opts
        ),
        edit: formatAssetUrl(
          new URL('./assets/icons/icon/edit.svg', opts.baseUrl).href,
          opts
        ),
        'external-link': formatAssetUrl(
          new URL('./assets/icons/icon/external-link.svg', opts.baseUrl).href,
          opts
        ),
        file: formatAssetUrl(
          new URL('./assets/icons/icon/file.svg', opts.baseUrl).href,
          opts
        ),
        'fill-none': formatAssetUrl(
          new URL('./assets/icons/icon/fill-none.svg', opts.baseUrl).href,
          opts
        ),
        'fill-pattern': formatAssetUrl(
          new URL('./assets/icons/icon/fill-pattern.svg', opts.baseUrl).href,
          opts
        ),
        'fill-semi': formatAssetUrl(
          new URL('./assets/icons/icon/fill-semi.svg', opts.baseUrl).href,
          opts
        ),
        'fill-solid': formatAssetUrl(
          new URL('./assets/icons/icon/fill-solid.svg', opts.baseUrl).href,
          opts
        ),
        follow: formatAssetUrl(
          new URL('./assets/icons/icon/follow.svg', opts.baseUrl).href,
          opts
        ),
        following: formatAssetUrl(
          new URL('./assets/icons/icon/following.svg', opts.baseUrl).href,
          opts
        ),
        'font-draw': formatAssetUrl(
          new URL('./assets/icons/icon/font-draw.svg', opts.baseUrl).href,
          opts
        ),
        'font-mono': formatAssetUrl(
          new URL('./assets/icons/icon/font-mono.svg', opts.baseUrl).href,
          opts
        ),
        'font-sans': formatAssetUrl(
          new URL('./assets/icons/icon/font-sans.svg', opts.baseUrl).href,
          opts
        ),
        'font-serif': formatAssetUrl(
          new URL('./assets/icons/icon/font-serif.svg', opts.baseUrl).href,
          opts
        ),
        'geo-arrow-down': formatAssetUrl(
          new URL('./assets/icons/icon/geo-arrow-down.svg', opts.baseUrl).href,
          opts
        ),
        'geo-arrow-left': formatAssetUrl(
          new URL('./assets/icons/icon/geo-arrow-left.svg', opts.baseUrl).href,
          opts
        ),
        'geo-arrow-right': formatAssetUrl(
          new URL('./assets/icons/icon/geo-arrow-right.svg', opts.baseUrl).href,
          opts
        ),
        'geo-arrow-up': formatAssetUrl(
          new URL('./assets/icons/icon/geo-arrow-up.svg', opts.baseUrl).href,
          opts
        ),
        'geo-check-box': formatAssetUrl(
          new URL('./assets/icons/icon/geo-check-box.svg', opts.baseUrl).href,
          opts
        ),
        'geo-diamond': formatAssetUrl(
          new URL('./assets/icons/icon/geo-diamond.svg', opts.baseUrl).href,
          opts
        ),
        'geo-ellipse': formatAssetUrl(
          new URL('./assets/icons/icon/geo-ellipse.svg', opts.baseUrl).href,
          opts
        ),
        'geo-hexagon': formatAssetUrl(
          new URL('./assets/icons/icon/geo-hexagon.svg', opts.baseUrl).href,
          opts
        ),
        'geo-octagon': formatAssetUrl(
          new URL('./assets/icons/icon/geo-octagon.svg', opts.baseUrl).href,
          opts
        ),
        'geo-oval': formatAssetUrl(
          new URL('./assets/icons/icon/geo-oval.svg', opts.baseUrl).href,
          opts
        ),
        'geo-pentagon': formatAssetUrl(
          new URL('./assets/icons/icon/geo-pentagon.svg', opts.baseUrl).href,
          opts
        ),
        'geo-rectangle': formatAssetUrl(
          new URL('./assets/icons/icon/geo-rectangle.svg', opts.baseUrl).href,
          opts
        ),
        'geo-rhombus-2': formatAssetUrl(
          new URL('./assets/icons/icon/geo-rhombus-2.svg', opts.baseUrl).href,
          opts
        ),
        'geo-rhombus': formatAssetUrl(
          new URL('./assets/icons/icon/geo-rhombus.svg', opts.baseUrl).href,
          opts
        ),
        'geo-star': formatAssetUrl(
          new URL('./assets/icons/icon/geo-star.svg', opts.baseUrl).href,
          opts
        ),
        'geo-trapezoid': formatAssetUrl(
          new URL('./assets/icons/icon/geo-trapezoid.svg', opts.baseUrl).href,
          opts
        ),
        'geo-triangle': formatAssetUrl(
          new URL('./assets/icons/icon/geo-triangle.svg', opts.baseUrl).href,
          opts
        ),
        'geo-x-box': formatAssetUrl(
          new URL('./assets/icons/icon/geo-x-box.svg', opts.baseUrl).href,
          opts
        ),
        github: formatAssetUrl(
          new URL('./assets/icons/icon/github.svg', opts.baseUrl).href,
          opts
        ),
        group: formatAssetUrl(
          new URL('./assets/icons/icon/group.svg', opts.baseUrl).href,
          opts
        ),
        hidden: formatAssetUrl(
          new URL('./assets/icons/icon/hidden.svg', opts.baseUrl).href,
          opts
        ),
        image: formatAssetUrl(
          new URL('./assets/icons/icon/image.svg', opts.baseUrl).href,
          opts
        ),
        'info-circle': formatAssetUrl(
          new URL('./assets/icons/icon/info-circle.svg', opts.baseUrl).href,
          opts
        ),
        leading: formatAssetUrl(
          new URL('./assets/icons/icon/leading.svg', opts.baseUrl).href,
          opts
        ),
        link: formatAssetUrl(
          new URL('./assets/icons/icon/link.svg', opts.baseUrl).href,
          opts
        ),
        'lock-small': formatAssetUrl(
          new URL('./assets/icons/icon/lock-small.svg', opts.baseUrl).href,
          opts
        ),
        lock: formatAssetUrl(
          new URL('./assets/icons/icon/lock.svg', opts.baseUrl).href,
          opts
        ),
        menu: formatAssetUrl(
          new URL('./assets/icons/icon/menu.svg', opts.baseUrl).href,
          opts
        ),
        minus: formatAssetUrl(
          new URL('./assets/icons/icon/minus.svg', opts.baseUrl).href,
          opts
        ),
        mixed: formatAssetUrl(
          new URL('./assets/icons/icon/mixed.svg', opts.baseUrl).href,
          opts
        ),
        pack: formatAssetUrl(
          new URL('./assets/icons/icon/pack.svg', opts.baseUrl).href,
          opts
        ),
        page: formatAssetUrl(
          new URL('./assets/icons/icon/page.svg', opts.baseUrl).href,
          opts
        ),
        plus: formatAssetUrl(
          new URL('./assets/icons/icon/plus.svg', opts.baseUrl).href,
          opts
        ),
        'question-mark-circle': formatAssetUrl(
          new URL('./assets/icons/icon/question-mark-circle.svg', opts.baseUrl)
            .href,
          opts
        ),
        'question-mark': formatAssetUrl(
          new URL('./assets/icons/icon/question-mark.svg', opts.baseUrl).href,
          opts
        ),
        redo: formatAssetUrl(
          new URL('./assets/icons/icon/redo.svg', opts.baseUrl).href,
          opts
        ),
        'reset-zoom': formatAssetUrl(
          new URL('./assets/icons/icon/reset-zoom.svg', opts.baseUrl).href,
          opts
        ),
        'rotate-ccw': formatAssetUrl(
          new URL('./assets/icons/icon/rotate-ccw.svg', opts.baseUrl).href,
          opts
        ),
        'rotate-cw': formatAssetUrl(
          new URL('./assets/icons/icon/rotate-cw.svg', opts.baseUrl).href,
          opts
        ),
        ruler: formatAssetUrl(
          new URL('./assets/icons/icon/ruler.svg', opts.baseUrl).href,
          opts
        ),
        search: formatAssetUrl(
          new URL('./assets/icons/icon/search.svg', opts.baseUrl).href,
          opts
        ),
        'send-backward': formatAssetUrl(
          new URL('./assets/icons/icon/send-backward.svg', opts.baseUrl).href,
          opts
        ),
        'send-to-back': formatAssetUrl(
          new URL('./assets/icons/icon/send-to-back.svg', opts.baseUrl).href,
          opts
        ),
        'settings-horizontal': formatAssetUrl(
          new URL('./assets/icons/icon/settings-horizontal.svg', opts.baseUrl)
            .href,
          opts
        ),
        'settings-vertical-1': formatAssetUrl(
          new URL('./assets/icons/icon/settings-vertical-1.svg', opts.baseUrl)
            .href,
          opts
        ),
        'settings-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/settings-vertical.svg', opts.baseUrl)
            .href,
          opts
        ),
        'share-1': formatAssetUrl(
          new URL('./assets/icons/icon/share-1.svg', opts.baseUrl).href,
          opts
        ),
        'share-2': formatAssetUrl(
          new URL('./assets/icons/icon/share-2.svg', opts.baseUrl).href,
          opts
        ),
        'size-extra-large': formatAssetUrl(
          new URL('./assets/icons/icon/size-extra-large.svg', opts.baseUrl)
            .href,
          opts
        ),
        'size-large': formatAssetUrl(
          new URL('./assets/icons/icon/size-large.svg', opts.baseUrl).href,
          opts
        ),
        'size-medium': formatAssetUrl(
          new URL('./assets/icons/icon/size-medium.svg', opts.baseUrl).href,
          opts
        ),
        'size-small': formatAssetUrl(
          new URL('./assets/icons/icon/size-small.svg', opts.baseUrl).href,
          opts
        ),
        'spline-cubic': formatAssetUrl(
          new URL('./assets/icons/icon/spline-cubic.svg', opts.baseUrl).href,
          opts
        ),
        'spline-line': formatAssetUrl(
          new URL('./assets/icons/icon/spline-line.svg', opts.baseUrl).href,
          opts
        ),
        'stack-horizontal': formatAssetUrl(
          new URL('./assets/icons/icon/stack-horizontal.svg', opts.baseUrl)
            .href,
          opts
        ),
        'stack-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/stack-vertical.svg', opts.baseUrl).href,
          opts
        ),
        'stretch-horizontal': formatAssetUrl(
          new URL('./assets/icons/icon/stretch-horizontal.svg', opts.baseUrl)
            .href,
          opts
        ),
        'stretch-vertical': formatAssetUrl(
          new URL('./assets/icons/icon/stretch-vertical.svg', opts.baseUrl)
            .href,
          opts
        ),
        'text-align-center': formatAssetUrl(
          new URL('./assets/icons/icon/text-align-center.svg', opts.baseUrl)
            .href,
          opts
        ),
        'text-align-justify': formatAssetUrl(
          new URL('./assets/icons/icon/text-align-justify.svg', opts.baseUrl)
            .href,
          opts
        ),
        'text-align-left': formatAssetUrl(
          new URL('./assets/icons/icon/text-align-left.svg', opts.baseUrl).href,
          opts
        ),
        'text-align-right': formatAssetUrl(
          new URL('./assets/icons/icon/text-align-right.svg', opts.baseUrl)
            .href,
          opts
        ),
        'tool-arrow': formatAssetUrl(
          new URL('./assets/icons/icon/tool-arrow.svg', opts.baseUrl).href,
          opts
        ),
        'tool-embed': formatAssetUrl(
          new URL('./assets/icons/icon/tool-embed.svg', opts.baseUrl).href,
          opts
        ),
        'tool-eraser': formatAssetUrl(
          new URL('./assets/icons/icon/tool-eraser.svg', opts.baseUrl).href,
          opts
        ),
        'tool-frame': formatAssetUrl(
          new URL('./assets/icons/icon/tool-frame.svg', opts.baseUrl).href,
          opts
        ),
        'tool-hand': formatAssetUrl(
          new URL('./assets/icons/icon/tool-hand.svg', opts.baseUrl).href,
          opts
        ),
        'tool-highlighter': formatAssetUrl(
          new URL('./assets/icons/icon/tool-highlighter.svg', opts.baseUrl)
            .href,
          opts
        ),
        'tool-laser': formatAssetUrl(
          new URL('./assets/icons/icon/tool-laser.svg', opts.baseUrl).href,
          opts
        ),
        'tool-line': formatAssetUrl(
          new URL('./assets/icons/icon/tool-line.svg', opts.baseUrl).href,
          opts
        ),
        'tool-media': formatAssetUrl(
          new URL('./assets/icons/icon/tool-media.svg', opts.baseUrl).href,
          opts
        ),
        'tool-note': formatAssetUrl(
          new URL('./assets/icons/icon/tool-note.svg', opts.baseUrl).href,
          opts
        ),
        'tool-pencil': formatAssetUrl(
          new URL('./assets/icons/icon/tool-pencil.svg', opts.baseUrl).href,
          opts
        ),
        'tool-pointer': formatAssetUrl(
          new URL('./assets/icons/icon/tool-pointer.svg', opts.baseUrl).href,
          opts
        ),
        'tool-text': formatAssetUrl(
          new URL('./assets/icons/icon/tool-text.svg', opts.baseUrl).href,
          opts
        ),
        trash: formatAssetUrl(
          new URL('./assets/icons/icon/trash.svg', opts.baseUrl).href,
          opts
        ),
        'triangle-down': formatAssetUrl(
          new URL('./assets/icons/icon/triangle-down.svg', opts.baseUrl).href,
          opts
        ),
        'triangle-up': formatAssetUrl(
          new URL('./assets/icons/icon/triangle-up.svg', opts.baseUrl).href,
          opts
        ),
        twitter: formatAssetUrl(
          new URL('./assets/icons/icon/twitter.svg', opts.baseUrl).href,
          opts
        ),
        undo: formatAssetUrl(
          new URL('./assets/icons/icon/undo.svg', opts.baseUrl).href,
          opts
        ),
        ungroup: formatAssetUrl(
          new URL('./assets/icons/icon/ungroup.svg', opts.baseUrl).href,
          opts
        ),
        'unlock-small': formatAssetUrl(
          new URL('./assets/icons/icon/unlock-small.svg', opts.baseUrl).href,
          opts
        ),
        unlock: formatAssetUrl(
          new URL('./assets/icons/icon/unlock.svg', opts.baseUrl).href,
          opts
        ),
        'vertical-align-center': formatAssetUrl(
          new URL('./assets/icons/icon/vertical-align-center.svg', opts.baseUrl)
            .href,
          opts
        ),
        'vertical-align-end': formatAssetUrl(
          new URL('./assets/icons/icon/vertical-align-end.svg', opts.baseUrl)
            .href,
          opts
        ),
        'vertical-align-start': formatAssetUrl(
          new URL('./assets/icons/icon/vertical-align-start.svg', opts.baseUrl)
            .href,
          opts
        ),
        visible: formatAssetUrl(
          new URL('./assets/icons/icon/visible.svg', opts.baseUrl).href,
          opts
        ),
        'warning-triangle': formatAssetUrl(
          new URL('./assets/icons/icon/warning-triangle.svg', opts.baseUrl)
            .href,
          opts
        ),
        'zoom-in': formatAssetUrl(
          new URL('./assets/icons/icon/zoom-in.svg', opts.baseUrl).href,
          opts
        ),
        'zoom-out': formatAssetUrl(
          new URL('./assets/icons/icon/zoom-out.svg', opts.baseUrl).href,
          opts
        ),
      },
      translations: {
        ar: formatAssetUrl(
          new URL('./assets/translations/ar.json', opts.baseUrl).href,
          opts
        ),
        ca: formatAssetUrl(
          new URL('./assets/translations/ca.json', opts.baseUrl).href,
          opts
        ),
        da: formatAssetUrl(
          new URL('./assets/translations/da.json', opts.baseUrl).href,
          opts
        ),
        de: formatAssetUrl(
          new URL('./assets/translations/de.json', opts.baseUrl).href,
          opts
        ),
        en: formatAssetUrl(
          new URL('./assets/translations/en.json', opts.baseUrl).href,
          opts
        ),
        es: formatAssetUrl(
          new URL('./assets/translations/es.json', opts.baseUrl).href,
          opts
        ),
        fa: formatAssetUrl(
          new URL('./assets/translations/fa.json', opts.baseUrl).href,
          opts
        ),
        fi: formatAssetUrl(
          new URL('./assets/translations/fi.json', opts.baseUrl).href,
          opts
        ),
        fr: formatAssetUrl(
          new URL('./assets/translations/fr.json', opts.baseUrl).href,
          opts
        ),
        gl: formatAssetUrl(
          new URL('./assets/translations/gl.json', opts.baseUrl).href,
          opts
        ),
        he: formatAssetUrl(
          new URL('./assets/translations/he.json', opts.baseUrl).href,
          opts
        ),
        'hi-in': formatAssetUrl(
          new URL('./assets/translations/hi-in.json', opts.baseUrl).href,
          opts
        ),
        hu: formatAssetUrl(
          new URL('./assets/translations/hu.json', opts.baseUrl).href,
          opts
        ),
        it: formatAssetUrl(
          new URL('./assets/translations/it.json', opts.baseUrl).href,
          opts
        ),
        ja: formatAssetUrl(
          new URL('./assets/translations/ja.json', opts.baseUrl).href,
          opts
        ),
        'ko-kr': formatAssetUrl(
          new URL('./assets/translations/ko-kr.json', opts.baseUrl).href,
          opts
        ),
        ku: formatAssetUrl(
          new URL('./assets/translations/ku.json', opts.baseUrl).href,
          opts
        ),
        languages: formatAssetUrl(
          new URL('./assets/translations/languages.json', opts.baseUrl).href,
          opts
        ),
        main: formatAssetUrl(
          new URL('./assets/translations/main.json', opts.baseUrl).href,
          opts
        ),
        my: formatAssetUrl(
          new URL('./assets/translations/my.json', opts.baseUrl).href,
          opts
        ),
        ne: formatAssetUrl(
          new URL('./assets/translations/ne.json', opts.baseUrl).href,
          opts
        ),
        no: formatAssetUrl(
          new URL('./assets/translations/no.json', opts.baseUrl).href,
          opts
        ),
        pl: formatAssetUrl(
          new URL('./assets/translations/pl.json', opts.baseUrl).href,
          opts
        ),
        'pt-br': formatAssetUrl(
          new URL('./assets/translations/pt-br.json', opts.baseUrl).href,
          opts
        ),
        'pt-pt': formatAssetUrl(
          new URL('./assets/translations/pt-pt.json', opts.baseUrl).href,
          opts
        ),
        ro: formatAssetUrl(
          new URL('./assets/translations/ro.json', opts.baseUrl).href,
          opts
        ),
        ru: formatAssetUrl(
          new URL('./assets/translations/ru.json', opts.baseUrl).href,
          opts
        ),
        sv: formatAssetUrl(
          new URL('./assets/translations/sv.json', opts.baseUrl).href,
          opts
        ),
        te: formatAssetUrl(
          new URL('./assets/translations/te.json', opts.baseUrl).href,
          opts
        ),
        th: formatAssetUrl(
          new URL('./assets/translations/th.json', opts.baseUrl).href,
          opts
        ),
        tr: formatAssetUrl(
          new URL('./assets/translations/tr.json', opts.baseUrl).href,
          opts
        ),
        uk: formatAssetUrl(
          new URL('./assets/translations/uk.json', opts.baseUrl).href,
          opts
        ),
        vi: formatAssetUrl(
          new URL('./assets/translations/vi.json', opts.baseUrl).href,
          opts
        ),
        'zh-cn': formatAssetUrl(
          new URL('./assets/translations/zh-cn.json', opts.baseUrl).href,
          opts
        ),
        'zh-tw': formatAssetUrl(
          new URL('./assets/translations/zh-tw.json', opts.baseUrl).href,
          opts
        ),
      },
      embedIcons: {
        codepen: formatAssetUrl(
          new URL('./assets/embed-icons/codepen.png', opts.baseUrl).href,
          opts
        ),
        codesandbox: formatAssetUrl(
          new URL('./assets/embed-icons/codesandbox.png', opts.baseUrl).href,
          opts
        ),
        excalidraw: formatAssetUrl(
          new URL('./assets/embed-icons/excalidraw.png', opts.baseUrl).href,
          opts
        ),
        felt: formatAssetUrl(
          new URL('./assets/embed-icons/felt.png', opts.baseUrl).href,
          opts
        ),
        figma: formatAssetUrl(
          new URL('./assets/embed-icons/figma.png', opts.baseUrl).href,
          opts
        ),
        github_gist: formatAssetUrl(
          new URL('./assets/embed-icons/github_gist.png', opts.baseUrl).href,
          opts
        ),
        google_calendar: formatAssetUrl(
          new URL('./assets/embed-icons/google_calendar.png', opts.baseUrl)
            .href,
          opts
        ),
        google_maps: formatAssetUrl(
          new URL('./assets/embed-icons/google_maps.png', opts.baseUrl).href,
          opts
        ),
        google_slides: formatAssetUrl(
          new URL('./assets/embed-icons/google_slides.png', opts.baseUrl).href,
          opts
        ),
        observable: formatAssetUrl(
          new URL('./assets/embed-icons/observable.png', opts.baseUrl).href,
          opts
        ),
        replit: formatAssetUrl(
          new URL('./assets/embed-icons/replit.png', opts.baseUrl).href,
          opts
        ),
        scratch: formatAssetUrl(
          new URL('./assets/embed-icons/scratch.png', opts.baseUrl).href,
          opts
        ),
        spotify: formatAssetUrl(
          new URL('./assets/embed-icons/spotify.png', opts.baseUrl).href,
          opts
        ),
        tldraw: formatAssetUrl(
          new URL('./assets/embed-icons/tldraw.png', opts.baseUrl).href,
          opts
        ),
        vimeo: formatAssetUrl(
          new URL('./assets/embed-icons/vimeo.png', opts.baseUrl).href,
          opts
        ),
        youtube: formatAssetUrl(
          new URL('./assets/embed-icons/youtube.png', opts.baseUrl).href,
          opts
        ),
      },
    };
  }
}
