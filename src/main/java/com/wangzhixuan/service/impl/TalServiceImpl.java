package com.wangzhixuan.service.impl;

import com.baomidou.mybatisplus.enums.SqlLike;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.wangzhixuan.model.Tal;
import com.wangzhixuan.mapper.TalMapper;
import com.wangzhixuan.service.ITalService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author jack.guo
 * @since 2018-05-21
 */
@Service
public class TalServiceImpl<T> extends ServiceImpl<TalMapper, Tal> implements ITalService {


    @Override
    public Page<Tal> selectPage(Page<Tal> var1, Tal tal) {
        String name = tal.getName();
        tal.setName(null);
        EntityWrapper<Tal> ew = new EntityWrapper<Tal>(tal);
        ew.like("name" , name, SqlLike.DEFAULT).eq("delete_flag",0);
        return super.selectPage(var1, ew);
    }
}
